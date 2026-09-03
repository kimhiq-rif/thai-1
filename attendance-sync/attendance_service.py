"""Scheduled attendance listener, with a watchdog on the clock's own date.

Runs all day and listens only inside LISTEN_WINDOWS, so the clock connection is
not held open through the hours nobody punches. Start it once (see
start_monitor.bat) and leave it; it opens and closes its own windows.

Punches that happen while the service is asleep still reach the Sheet: when a
window opens, the service pulls the day's punches off the clock and sends any
it has not seen before.

The device has been stamping punches 2027, 2035 and 2119 - its RTC drifts, and
on 2026-09-01 it did so mid-morning, between one punch and the next. So the
service also keeps the device clock honest: it compares the device's time to
this PC's on every window open and every CLOCK_CHECK_MINUTES while listening,
corrects drift beyond MAX_DRIFT_SECONDS, and logs every correction. Frequent
corrections in that log mean the RTC backup battery is flat and needs
replacing - setting the time in software only holds until the next power cut.

A punch that still arrives with an impossible date is written with this PC's
time instead, flagged so nobody reads it as a real 2119 punch.
"""
import ctypes
import json
import os
import time as time_module
from datetime import datetime, time, timedelta

import requests
from zk import ZK

BASE = os.path.dirname(os.path.abspath(__file__))
URL_FILE = os.path.join(BASE, "weburl.txt")
SEEN_FILE = os.path.join(BASE, "seen.txt")
# sync_history.py keeps its own record of what it has sent, as a JSON list of
# "<id>_<timestamp>". Reading it too stops a punch it already uploaded from
# being uploaded again here.
LEGACY_SEEN_FILE = os.path.join(BASE, "seen")
CLOCK_LOG_FILE = os.path.join(BASE, "clock_corrections.log")

CLOCK_IP = '192.168.1.201'
CLOCK_PORT = 4370

# When to listen. Add or edit pairs freely; they are (start, end) local time.
LISTEN_WINDOWS = [
    (time(7, 30), time(10, 0)),
    (time(15, 0), time(19, 0)),
]

# What counts as a normal punch.
ENTRY_START = time(7, 0)
ENTRY_END = time(8, 0)
EXIT_START = time(16, 0)
EXIT_END = time(17, 30)

# How often live_capture wakes up so the service can notice a window closing.
CAPTURE_TIMEOUT = 30
SEEN_RETENTION_DAYS = 7

# How far back a catch-up looks. Only today is not enough: a PC asleep from
# Friday evening to Monday morning would leave the weekend's punches with no
# run that ever considers them.
CATCHUP_DAYS = 3

# Windows sleeps an idle PC out from under a listening window, and a suspended
# process hears nothing. These ask it not to, for as long as a window is open.
ES_CONTINUOUS = 0x80000000
ES_SYSTEM_REQUIRED = 0x00000001


def keep_awake(on):
    """Hold sleep off while listening, and let it resume afterwards."""
    if os.name != 'nt':
        return
    try:
        flags = ES_CONTINUOUS | ES_SYSTEM_REQUIRED if on else ES_CONTINUOUS
        ctypes.windll.kernel32.SetThreadExecutionState(flags)
    except Exception as e:
        print("Could not change the sleep setting: {}".format(e))


# Clock watchdog.
CLOCK_CHECK_MINUTES = 15      # how often to re-check the device clock
MAX_DRIFT_SECONDS = 120       # correct the device once it is off by more than this
PLAUSIBLE_YEARS = (2020, 2100)  # a punch dated outside this is the RTC talking

# Catching up after a sleep mails one alert per punch. Past this many, mail
# would be a burst nobody reads and would eat into the 100/day Gmail quota, so
# the backlog goes up the silent batch path instead.
MAX_CATCHUP_EMAILS = 15

with open(URL_FILE) as f:
    GOOGLE_WEB_APP_URL = f.read().strip()


def check_time_status(timestamp):
    current_time = timestamp.time()
    if ENTRY_START <= current_time <= ENTRY_END:
        return "OK (Standard Entry)", False
    elif EXIT_START <= current_time <= EXIT_END:
        return "OK (Standard Exit)", False
    else:
        return "ALERT: Irregular Time Punch!", True


def in_window(now_time):
    for start, end in LISTEN_WINDOWS:
        if start <= now_time <= end:
            return True
    return False


def next_window_start(now):
    candidates = []
    for start, _ in LISTEN_WINDOWS:
        today = now.replace(hour=start.hour, minute=start.minute,
                            second=0, microsecond=0)
        candidates.append(today if today > now else today + timedelta(days=1))
    return min(candidates)


def punch_key(user_id, timestamp_str):
    return "{}|{}".format(timestamp_str, user_id)


def log_clock_event(message):
    line = "{} {}".format(datetime.now().strftime('%Y-%m-%d %H:%M:%S'), message)
    print(line)
    with open(CLOCK_LOG_FILE, "a") as f:
        f.write(line + "\n")


def check_and_fix_clock(conn):
    """Pull the device clock back to this PC's when it has drifted."""
    try:
        device_time = conn.get_time()
    except Exception as e:
        log_clock_event("Could not read device clock: {}".format(e))
        return

    pc_now = datetime.now()
    drift = (device_time - pc_now).total_seconds()

    if abs(drift) <= MAX_DRIFT_SECONDS:
        return

    log_clock_event("Device clock reads {}, PC reads {} ({:+.0f}s off). Correcting."
                    .format(device_time.strftime('%Y-%m-%d %H:%M:%S'),
                            pc_now.strftime('%Y-%m-%d %H:%M:%S'), drift))
    try:
        conn.set_time(datetime.now())
        log_clock_event("Corrected. Device now reads {}."
                        .format(conn.get_time().strftime('%Y-%m-%d %H:%M:%S')))
        log_clock_event("If this keeps recurring, the RTC backup battery is flat "
                        "and needs replacing - software correction only holds "
                        "until the next power cut.")
    except Exception as e:
        log_clock_event("Correction FAILED: {}".format(e))


def sane_timestamp(punch_time):
    """Return (timestamp, note): a punch dated outside PLAUSIBLE_YEARS is the
    device's broken RTC, not a real date, so substitute the PC's time and say
    so rather than writing 2119 into the log as though it meant something."""
    if PLAUSIBLE_YEARS[0] <= punch_time.year <= PLAUSIBLE_YEARS[1]:
        return punch_time, ""
    substitute = datetime.now()
    log_clock_event("Punch arrived dated {} - impossible. Recording it as {} instead."
                    .format(punch_time.strftime('%Y-%m-%d %H:%M:%S'),
                            substitute.strftime('%Y-%m-%d %H:%M:%S')))
    return substitute, " [device clock was wrong: reported {}]".format(
        punch_time.strftime('%Y-%m-%d %H:%M:%S'))


def load_legacy_seen():
    """Keys sync_history.py has recorded, translated into this file's format."""
    if not os.path.exists(LEGACY_SEEN_FILE):
        return set()
    try:
        with open(LEGACY_SEEN_FILE) as f:
            entries = json.load(f)
    except Exception as e:
        print("Could not read {}: {}".format(LEGACY_SEEN_FILE, e))
        return set()
    keys = set()
    for entry in entries:
        user_id, _, timestamp_str = str(entry).partition("_")
        if timestamp_str:
            keys.add(punch_key(user_id, timestamp_str))
    return keys


def load_seen():
    if not os.path.exists(SEEN_FILE):
        return None  # never run before - the caller seeds instead of sending
    cutoff = (datetime.now() - timedelta(days=SEEN_RETENTION_DAYS)).strftime('%Y-%m-%d')
    seen = set()
    with open(SEEN_FILE) as f:
        for line in f:
            key = line.strip()
            if key and key[:10] >= cutoff:
                seen.add(key)
    return seen


def save_seen(seen):
    with open(SEEN_FILE, "w") as f:
        for key in sorted(seen):
            f.write(key + "\n")


def build_payload(user_map, user_id, punch_time):
    punch_time, clock_note = sane_timestamp(punch_time)
    status_text, is_irregular = check_time_status(punch_time)
    punch_time_str = punch_time.strftime('%Y-%m-%d %H:%M:%S')
    return {
        "name": user_map.get(user_id, "Unknown"),
        "id": user_id,
        "timestamp": punch_time_str,
        "status": (f"*** {status_text} ***" if is_irregular else status_text) + clock_note
    }


def post(payload):
    resp = requests.post(GOOGLE_WEB_APP_URL, json=payload, timeout=60)
    resp.raise_for_status()
    if "success" not in resp.text:
        raise requests.exceptions.RequestException(
            "unexpected response: " + resp.text[:200])
    return resp


def catch_up(conn, user_map, seen):
    """Send recent punches the service missed while it was not listening."""
    cutoff = (datetime.now() - timedelta(days=CATCHUP_DAYS)).date()
    todays = [r for r in conn.get_attendance() if r.timestamp.date() >= cutoff]

    if seen is None:
        # First ever run: assume the history import already covered these, and
        # record the keys rather than posting them all a second time.
        seen = {punch_key(r.user_id, r.timestamp.strftime('%Y-%m-%d %H:%M:%S'))
                for r in todays}
        save_seen(seen)
        print("First run: {} recent punches marked as already imported."
              .format(len(seen)))
        return seen

    already_sent = seen | load_legacy_seen()
    missed = [r for r in todays
              if punch_key(r.user_id, r.timestamp.strftime('%Y-%m-%d %H:%M:%S')) not in already_sent]
    if not missed:
        print("Nothing missed while asleep.")
        return seen

    payloads = [build_payload(user_map, r.user_id, r.timestamp) for r in missed]
    payloads.sort(key=lambda r: r["timestamp"], reverse=True)

    if len(payloads) <= MAX_CATCHUP_EMAILS:
        print("Catching up on {} punch(es) missed while asleep (one email each)..."
              .format(len(missed)))
        for payload in payloads:
            post(payload)  # a dict takes the single path: row + email
    else:
        print("Catching up on {} punch(es) missed while asleep. That is over the "
              "{}-email limit, so these are written without mail."
              .format(len(missed), MAX_CATCHUP_EMAILS))
        post(payloads)  # a list takes the batch path: rows written, no mail
    for r in missed:
        seen.add(punch_key(r.user_id, r.timestamp.strftime('%Y-%m-%d %H:%M:%S')))
    save_seen(seen)
    print("Catch-up done.")
    return seen


def run_window(zk):
    conn = None
    try:
        print("Window open. Connecting to attendance clock...")
        keep_awake(True)
        conn = zk.connect()
        print("Connected.")

        check_and_fix_clock(conn)
        next_clock_check = datetime.now() + timedelta(minutes=CLOCK_CHECK_MINUTES)

        user_map = {u.user_id: u.name for u in conn.get_users()}
        print("{} users loaded.".format(len(user_map)))

        seen = catch_up(conn, user_map, load_seen())
        if seen is None:
            seen = load_seen() or set()

        print("Listening for punches...")
        for attendance in conn.live_capture(new_timeout=CAPTURE_TIMEOUT):
            if attendance is None:
                if not in_window(datetime.now().time()):
                    print("Window closed.")
                    conn.end_live_capture = True
                    break
                # The RTC has jumped mid-shift before, so re-check it between
                # punches rather than only when a window opens.
                if datetime.now() >= next_clock_check:
                    check_and_fix_clock(conn)
                    next_clock_check = datetime.now() + timedelta(minutes=CLOCK_CHECK_MINUTES)
                continue

            payload = build_payload(user_map, attendance.user_id, attendance.timestamp)
            print("[{}] {} - {}".format(
                payload["timestamp"], payload["name"], payload["status"]))
            try:
                post(payload)  # a dict takes the single path: row + email
                print("    -> row written, email sent")
                seen.add(punch_key(payload["id"], payload["timestamp"]))
                save_seen(seen)
            except requests.exceptions.RequestException as err:
                print("    -> failed to reach Google: {}".format(err))
    finally:
        keep_awake(False)
        if conn:
            try:
                conn.disconnect()
                print("Disconnected from clock.")
            except Exception:
                pass


def main():
    zk = ZK(CLOCK_IP, port=CLOCK_PORT, timeout=5)
    print("Attendance service started.")
    print("Web App URL: " + GOOGLE_WEB_APP_URL)
    print("Listening windows: " + ", ".join(
        "{}-{}".format(s.strftime('%H:%M'), e.strftime('%H:%M'))
        for s, e in LISTEN_WINDOWS))
    print("Leave this window open. Ctrl+C stops the service.")
    print("")

    announced_sleep = False
    while True:
        try:
            if in_window(datetime.now().time()):
                announced_sleep = False
                run_window(zk)
            else:
                if not announced_sleep:
                    nxt = next_window_start(datetime.now())
                    print("Outside listening hours. Sleeping until {}."
                          .format(nxt.strftime('%Y-%m-%d %H:%M')))
                    announced_sleep = True
                time_module.sleep(60)
        except KeyboardInterrupt:
            print("")
            print("Service stopped.")
            return
        except Exception as e:
            print("Error: {}".format(e))
            print("Retrying in 30 seconds...")
            time_module.sleep(30)


if __name__ == "__main__":
    main()
