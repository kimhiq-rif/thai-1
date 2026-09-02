"""A timed, verbose listening run for rehearsing the whole chain by hand.

attendance_service.py listens only inside its configured windows, so a drill at
10:05 would find it asleep and prove nothing. This listens continuously for
DRILL_MINUTES regardless of the clock, then stops on its own - so the
production windows stay untouched and there is nothing to remember to undo.

    python drill_test.py              # listen 15 minutes, leave the PC awake
    python drill_test.py 10           # listen 10 minutes
    python drill_test.py 10 --sleep   # listen 10 minutes, then sleep the PC

Everything it prints also goes to drill_log.txt, so the run can be read after
the window has closed.
"""
import os
import subprocess
import sys
import time as time_module
from datetime import datetime, time, timedelta

import requests
from zk import ZK

BASE = os.path.dirname(os.path.abspath(__file__))
URL_FILE = os.path.join(BASE, "weburl.txt")
SEEN_FILE = os.path.join(BASE, "seen.txt")
LOG_FILE = os.path.join(BASE, "drill_log.txt")

CLOCK_IP = '192.168.1.201'
CLOCK_PORT = 4370
CAPTURE_TIMEOUT = 10          # how often to wake up and re-check the deadline
DEFAULT_MINUTES = 15

ENTRY_START = time(7, 0)
ENTRY_END = time(8, 0)
EXIT_START = time(16, 0)
EXIT_END = time(17, 30)

with open(URL_FILE) as f:
    GOOGLE_WEB_APP_URL = f.read().strip()


def log(message):
    line = "{}  {}".format(datetime.now().strftime('%H:%M:%S'), message)
    print(line, flush=True)
    with open(LOG_FILE, "a", encoding="utf-8") as f:
        f.write(line + "\n")


def check_time_status(timestamp):
    t = timestamp.time()
    if ENTRY_START <= t <= ENTRY_END:
        return "OK (Standard Entry)", False
    elif EXIT_START <= t <= EXIT_END:
        return "OK (Standard Exit)", False
    return "ALERT: Irregular Time Punch!", True


def main():
    minutes = DEFAULT_MINUTES
    sleep_after = "--sleep" in sys.argv
    for arg in sys.argv[1:]:
        if arg.isdigit():
            minutes = int(arg)

    deadline = datetime.now() + timedelta(minutes=minutes)

    log("=" * 60)
    log("DRILL START")
    log("Listening continuously for {} minutes, until {}.".format(
        minutes, deadline.strftime('%H:%M:%S')))
    log("Production listening windows are ignored for this run.")
    if sleep_after:
        log("The PC will be put to sleep when the drill ends.")
    log("=" * 60)

    zk = ZK(CLOCK_IP, port=CLOCK_PORT, timeout=5)
    conn = None
    punches = 0

    try:
        log("Connecting to clock at {}:{}...".format(CLOCK_IP, CLOCK_PORT))
        conn = zk.connect()
        log("Connected.")

        device_time = conn.get_time()
        drift = (device_time - datetime.now()).total_seconds()
        log("Device clock: {} ({:+.0f}s vs this PC)".format(
            device_time.strftime('%Y-%m-%d %H:%M:%S'), drift))

        user_map = {u.user_id: u.name for u in conn.get_users()}
        log("{} users loaded.".format(len(user_map)))
        log("")
        log(">>> GO AND PUNCH ON THE CLOCK NOW <<<")
        log("")

        for attendance in conn.live_capture(new_timeout=CAPTURE_TIMEOUT):
            if datetime.now() >= deadline:
                log("Time is up.")
                conn.end_live_capture = True
                break

            if attendance is None:
                remaining = int((deadline - datetime.now()).total_seconds())
                log("...waiting ({}s left)".format(remaining))
                continue

            punches += 1
            name = user_map.get(attendance.user_id, "Unknown")
            status_text, irregular = check_time_status(attendance.timestamp)
            stamp = attendance.timestamp.strftime('%Y-%m-%d %H:%M:%S')
            status = "*** {} ***".format(status_text) if irregular else status_text

            log("PUNCH DETECTED: {} (id {}) at {}".format(name, attendance.user_id, stamp))
            log("   status: {}".format(status))

            payload = {"name": name, "id": attendance.user_id,
                       "timestamp": stamp, "status": status}
            try:
                resp = requests.post(GOOGLE_WEB_APP_URL, json=payload, timeout=60)
                resp.raise_for_status()
                if '"result":"success"' in resp.text.replace(' ', ''):
                    log("   -> row written to the Sheet, alert email sent")
                    # Record it so the service does not treat it as missed and
                    # send a second alert for the same punch at its next window.
                    with open(SEEN_FILE, "a") as f:
                        f.write("{}|{}\n".format(stamp, attendance.user_id))
                else:
                    log("   -> Web App did not report success: " + resp.text[:200])
            except requests.exceptions.RequestException as err:
                log("   -> FAILED to reach Google: {}".format(err))

    except KeyboardInterrupt:
        log("Stopped by hand.")
    except Exception as e:
        log("ERROR: {}".format(e))
    finally:
        if conn:
            try:
                conn.disconnect()
                log("Disconnected from clock.")
            except Exception:
                pass

        log("")
        log("=" * 60)
        log("DRILL END - {} punch(es) captured".format(punches))
        log("Full log: {}".format(LOG_FILE))
        log("=" * 60)

        if sleep_after:
            log("Sleeping the PC in 10 seconds... (Ctrl+C to cancel)")
            try:
                time_module.sleep(10)
                subprocess.run(
                    ["rundll32.exe", "powrprof.dll,SetSuspendState", "0,1,0"],
                    check=False)
            except KeyboardInterrupt:
                log("Sleep cancelled.")


if __name__ == "__main__":
    main()
