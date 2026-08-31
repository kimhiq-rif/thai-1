"""Send one fake punch to the Web App to prove the email path works.

Writes a single row and should trigger the Gmail alert, without touching the
clock. Run this before relying on live monitoring for a real shift, and delete
the test row from the Sheet afterwards.
"""
import os
import requests
from datetime import datetime

URL_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "weburl.txt")
with open(URL_FILE) as f:
    GOOGLE_WEB_APP_URL = f.read().strip()

# A dict, not a list: doPost routes single objects to the branch that appends
# the row and sends the email. A list would take the silent bulk-import path.
payload = {
    "name": "EMAIL TEST",
    "id": "0",
    "timestamp": datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
    "status": "*** ALERT: Irregular Time Punch! *** (test)"
}

print("Sending one test punch to:")
print("  " + GOOGLE_WEB_APP_URL)
resp = requests.post(GOOGLE_WEB_APP_URL, json=payload, timeout=60)
print("HTTP status: {}".format(resp.status_code))
print("Response body: {}".format(resp.text[:500]))

if '"result":"success"' in resp.text.replace(' ', ''):
    print("")
    print("Row written and sendEmail returned without error.")
    print("Check the inboxes now. If nothing arrives within a few minutes:")
    print("  - look in Spam")
    print("  - open Apps Script -> Executions and read the doPost entry")
    print("  - a Gmail quota of 100/day applies to consumer accounts")
else:
    print("")
    print("The Web App did not report success - read the response body above.")
    print("An authorization error means the Gmail scope was never granted:")
    print("  open the Apps Script editor, pick doPost, press Run once,")
    print("  and accept the permission prompt. Then redeploy.")
