import requests
from datetime import datetime, time
from zk import ZK

zk = ZK('192.168.1.201', port=4370, timeout=5)
GOOGLE_WEB_APP_URL = "https://script.google.com/macros/s/AKfycby8LXQTrhXMI41UpWCkkTvidcvtkcMB6a1czkuESKXsAhaEoQQtT53m9qIcwoja78HBvw/exec"

ENTRY_START = time(7, 0)
ENTRY_END = time(8, 0)
EXIT_START = time(16, 0)
EXIT_END = time(17, 30)
BATCH_SIZE = 300

def check_time_status(timestamp):
    current_time = timestamp.time()
    if ENTRY_START <= current_time <= ENTRY_END:
        return "OK (Standard Entry)", False
    elif EXIT_START <= current_time <= EXIT_END:
        return "OK (Standard Exit)", False
    else:
        return "ALERT: Irregular Time Punch!", True

def post_with_redirect(url, chunk):
    resp = requests.post(url, json=chunk, timeout=30, allow_redirects=False)
    if resp.status_code in (301, 302, 303, 307, 308):
        redirect_url = resp.headers.get('Location')
        resp = requests.post(redirect_url, json=chunk, timeout=30)
    resp.raise_for_status()
    return resp

try:
    print("Connecting to attendance clock...")
    conn = zk.connect()
    print("Connected successfully!")

    users = conn.get_users()
    user_map = {user.user_id: user.name for user in users}

    print("Fetching all attendance logs...")
    attendance_records = conn.get_attendance()
    conn.disconnect()
    print(f"Found {len(attendance_records)} records. Preparing batches...")

    payloads = []
    for record in attendance_records:
        user_name = user_map.get(record.user_id, "Unknown")
        punch_time = record.timestamp
        status_text, is_irregular = check_time_status(punch_time)
        punch_time_str = punch_time.strftime('%Y-%m-%d %H:%M:%S')
        final_status = f"*** {status_text} ***" if is_irregular else status_text
        payloads.append({
            "name": user_name, "id": record.user_id,
            "timestamp": punch_time_str, "status": final_status
        })

    total = len(payloads)
    sent = 0
    for i in range(0, total, BATCH_SIZE):
        chunk = payloads[i:i + BATCH_SIZE]
        try:
            post_with_redirect(GOOGLE_WEB_APP_URL, chunk)
            sent += len(chunk)
            print(f"Synced {sent}/{total} records...")
        except requests.exceptions.RequestException as req_err:
            print(f"Batch starting at record {i} failed: {req_err}")

    print("All historical logs successfully synced to Google Sheets!")

except Exception as e:
    print(f"Error: {e}")
