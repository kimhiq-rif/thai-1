"""Listen for punches on the clock and push each one to the Sheet as it happens.

Every punch goes up as a single object, which is the doPost branch that appends
the row and sends the alert email. Leave this running in its own PowerShell
window for the whole shift; Ctrl+C stops it.
"""
import os
import requests
from datetime import datetime, time
from zk import ZK

URL_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "weburl.txt")
with open(URL_FILE) as f:
    GOOGLE_WEB_APP_URL = f.read().strip()

zk = ZK('192.168.1.201', port=4370, timeout=5)

ENTRY_START = time(7, 0)
ENTRY_END = time(8, 0)
EXIT_START = time(16, 0)
EXIT_END = time(17, 30)

def check_time_status(timestamp):
    current_time = timestamp.time()
    if ENTRY_START <= current_time <= ENTRY_END:
        return "OK (Standard Entry)", False
    elif EXIT_START <= current_time <= EXIT_END:
        return "OK (Standard Exit)", False
    else:
        return "ALERT: Irregular Time Punch!", True

conn = None
try:
    print("Web App URL in use:")
    print("  " + GOOGLE_WEB_APP_URL)
    print("Connecting to attendance clock...")
    conn = zk.connect()
    print("Connected successfully!")

    users = conn.get_users()
    user_map = {user.user_id: user.name for user in users}
    print("{} users loaded from the clock.".format(len(user_map)))

    print("")
    print("[LIVE MONITORING ACTIVE] - press Ctrl+C to stop")
    print("Waiting for punches...")
    print("")

    for attendance in conn.live_capture():
        if attendance is None:
            continue  # live_capture yields None on its idle timeout

        user_name = user_map.get(attendance.user_id, "Unknown")
        punch_time = attendance.timestamp
        status_text, is_irregular = check_time_status(punch_time)
        punch_time_str = punch_time.strftime('%Y-%m-%d %H:%M:%S')
        final_status = f"*** {status_text} ***" if is_irregular else status_text

        print(f"[{punch_time_str}] {user_name} - {final_status}")

        payload = {
            "name": user_name,
            "id": attendance.user_id,
            "timestamp": punch_time_str,
            "status": final_status
        }
        try:
            resp = requests.post(GOOGLE_WEB_APP_URL, json=payload, timeout=60)
            resp.raise_for_status()
            if '"result":"success"' in resp.text.replace(' ', ''):
                print("    -> row written, email sent")
            else:
                print("    -> Web App did not report success: " + resp.text[:200])
        except requests.exceptions.RequestException as req_err:
            print(f"    -> failed to reach Google: {req_err}")

except KeyboardInterrupt:
    print("")
    print("Stopping monitor...")
except Exception as e:
    print(f"Error: {e}")
finally:
    if conn:
        conn.disconnect()
        print("Disconnected from clock.")
