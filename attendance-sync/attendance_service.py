"""Scheduled attendance listener.

Runs all day and listens only inside LISTEN_WINDOWS, so the clock connection is
not held open through the hours nobody punches. Start it once (see
start_monitor.bat) and leave it; it opens and closes its own windows.

Punches that happen while the service is asleep still reach the Sheet: when a
window opens, the service pulls the day's punches off the clock and sends any
it has not seen before. Those go up the batch path, which writes the rows
without mailing - an alert hours after the fact is noise, and a backlog could
burn the daily Gmail quota in one go.
"""
import os
import time as time_module
from datetime import datetime, time, timedelta

import requests
from zk import ZK

BASE = os.path.dirname(os.path.abspath(__file__))
URL_FILE = os.path.join(BASE, "weburl.txt")
SEEN_FILE = os.path.join(BASE, "seen.txt")

CLOCK_IP = '192.168.1.201'
CLOCK_PORT = 4370

# When to listen. Add or edit pairs freely; they are (start, end) local time.
LISTEN_WINDOWS = [
    (time(6, 30), time(10, 0)),
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
    status_text, is_irregular = check_time_status(punch_time)
    punch_time_str = punch_time.strftime('%Y-%m-%d %H:%M:%S')
    return {
        "name": user_map.get(user_id, "Unknown"),
        "id": user_id,
        "timestamp": punch_time_str,
        "status": f"*** {status_text} ***" if is_irregular else status_text
    }


def post(payload):
    resp = requests.post(GOOGLE_WEB_APP_URL, json=payload, timeout=60)
    resp.raise_for_status()
    if "success" not in resp.text:
        raise requests.exceptions.RequestException(
            "unexpected response: " + resp.text[:200])
    return resp


def catch_up(conn, user_map, seen):
    """Send today's punches that the service missed while it was asleep."""
    today = datetime.now().date()
    todays = [r for r in conn.get_attendance() if r.timestamp.date() == today]

    if seen is None:
        # First ever run: assume the history import already covered today, and
        # record the keys rather than posting them all a second time.
        seen = {punch_key(r.user_id, r.timestamp.strftime('%Y-%m-%d %H:%M:%S'))
                for r in todays}
        save_seen(seen)
        print("First run: {} punches from today marked as already imported."
              .format(len(seen)))
        return seen

    missed = [r for r in todays
              if punch_key(r.user_id, r.timestamp.strftime('%Y-%m-%d %H:%M:%S')) not in seen]
    if not missed:
        print("Nothing missed while asleep.")
        return seen

    print("Catching up on {} punch(es) missed while asleep (no email sent)..."
          .format(len(missed)))
    payloads = [build_payload(user_map, r.user_id, r.timestamp) for r in missed]
    payloads.sort(key=lambda r: r["timestamp"], reverse=True)
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
        conn = zk.connect()
        print("Connected.")

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
