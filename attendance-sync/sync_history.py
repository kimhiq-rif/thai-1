"""Pull punches off the clock and send anything the Sheet has not seen.

Originally a one-off importer for the 5,008 records already on the device; now
also the recovery path for punches the listener missed while it was not
running. Both uses are the same operation - send what is new - so what differs
is only the volume, and the volume decides whether alerts go out.

Records already sent are remembered in `seen`, a JSON list of
"<id>_<timestamp>", so re-running this costs nothing and sends nothing twice.
"""
import json
import os
import requests
from datetime import datetime, time
from zk import ZK

BASE = os.path.dirname(os.path.abspath(__file__))
URL_FILE = os.path.join(BASE, "weburl.txt")
SEEN_FILE = os.path.join(BASE, "seen")

with open(URL_FILE) as f:
    GOOGLE_WEB_APP_URL = f.read().strip()

zk = ZK('192.168.1.201', port=4370, timeout=5)

ENTRY_START = time(7, 0)
ENTRY_END = time(8, 0)
EXIT_START = time(16, 0)
EXIT_END = time(17, 30)

BATCH_SIZE = 300

# Recovering a handful of missed punches should alert like the live listener
# does. A bulk import should not: 5,008 records would be 5,008 emails against a
# 100/day quota, and nobody reads a burst that size anyway.
MAX_EMAILS = 15


def load_seen():
    if os.path.exists(SEEN_FILE):
        try:
            with open(SEEN_FILE) as f:
                return set(json.load(f))
        except Exception as e:
            print(f"Could not read {SEEN_FILE} ({e}); treating everything as new.")
            return set()
    return set()


def save_seen(seen_set):
    with open(SEEN_FILE, "w") as f:
        json.dump(sorted(seen_set), f)


def punch_key(user_id, timestamp_str):
    return f"{user_id}_{timestamp_str}"


def check_time_status(timestamp):
    current_time = timestamp.time()
    if ENTRY_START <= current_time <= ENTRY_END:
        return "OK (Standard Entry)", False
    elif EXIT_START <= current_time <= EXIT_END:
        return "OK (Standard Exit)", False
    else:
        return "ALERT: Irregular Time Punch!", True


def post(payload):
    """A dict mails its alert; a list is written silently. doPost branches on
    which one it receives."""
    resp = requests.post(GOOGLE_WEB_APP_URL, json=payload, timeout=60)
    resp.raise_for_status()
    if "success" not in resp.text:
        raise requests.exceptions.RequestException(
            "unexpected response: " + resp.text[:200])
    return resp


print("Web App URL in use:")
print("  " + GOOGLE_WEB_APP_URL)

try:
    print("Connecting to attendance clock...")
    conn = zk.connect()
    print("Connected successfully!")

    users = conn.get_users()
    user_map = {user.user_id: user.name for user in users}

    print("Fetching all attendance logs...")
    attendance_records = conn.get_attendance()
    conn.disconnect()
    print(f"Found {len(attendance_records)} total records on clock.")

    seen = load_seen()

    payloads = []
    for record in attendance_records:
        punch_time_str = record.timestamp.strftime('%Y-%m-%d %H:%M:%S')
        key = punch_key(record.user_id, punch_time_str)
        if key in seen:
            continue
        status_text, is_irregular = check_time_status(record.timestamp)
        payloads.append({
            "name": user_map.get(record.user_id, "Unknown"),
            "id": record.user_id,
            "timestamp": punch_time_str,
            "status": f"*** {status_text} ***" if is_irregular else status_text,
            "raw_key": key
        })

    if not payloads:
        print("No new records to sync. Everything is already up to date.")
    else:
        # Newest first, so the Sheet reads top-down from most to least recent.
        payloads.sort(key=lambda r: r["timestamp"], reverse=True)
        total = len(payloads)
        sent = 0

        if total <= MAX_EMAILS:
            print(f"Found {total} new record(s). Sending one at a time, with alerts...")
            for item in payloads:
                body = {k: v for k, v in item.items() if k != "raw_key"}
                try:
                    post(body)
                    seen.add(item["raw_key"])
                    sent += 1
                    print(f"  [{item['timestamp']}] {item['name']} - alert sent")
                except requests.exceptions.RequestException as err:
                    print(f"  [{item['timestamp']}] {item['name']} - FAILED: {err}")
        else:
            print(f"Found {total} new records - over the {MAX_EMAILS}-email limit, "
                  "so these are written without alerts.")
            for i in range(0, total, BATCH_SIZE):
                chunk = payloads[i:i + BATCH_SIZE]
                clean = [{k: v for k, v in item.items() if k != "raw_key"}
                         for item in chunk]
                try:
                    post(clean)
                    for item in chunk:
                        seen.add(item["raw_key"])
                    sent += len(chunk)
                    print(f"Synced {sent}/{total} records...")
                except requests.exceptions.RequestException as err:
                    print(f"Batch starting at record {i} failed: {err}")

        save_seen(seen)
        print(f"Done. {sent}/{total} new records synced to Google Sheets.")

except Exception as e:
    print(f"Error: {e}")
