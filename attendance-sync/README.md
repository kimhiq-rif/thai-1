# Attendance clock -> Google Sheets sync

Scripts for pushing punch records from a ZK Teco attendance clock (LAN, `192.168.1.201:4370`)
into a Google Sheet through an Apps Script Web App.

## Files

| File | Where it runs |
| --- | --- |
| `sync_history.py` | Windows PC on the clock's LAN — one-off historical import of all stored punches |
| `doPost.gs` | The Sheet's Apps Script project — the Web App endpoint |
| `weburl.txt` | Created locally next to the script; holds the Web App URL |

## Requirements

```
pip install requests pyzk
```

## Setup

1. Paste `doPost.gs` over everything in the Apps Script project (Extensions -> Apps Script).
2. Deploy -> **New deployment** -> Web app, with:
   - Execute as: **Me**
   - Who has access: **Anyone**
3. Open the deployment URL in a browser. It must print `doGet OK - deployment is live`.
4. Save that URL next to the script:

```powershell
cd "C:\Users\P&T COMPUTER\Documents\pyzk"
Set-Content weburl.txt "https://script.google.com/macros/s/..../exec"
python sync_history.py
```

The script prints the URL it is using, sends one `CONNECTION TEST` row, and only touches the clock
once that row lands. Delete the test row from the Sheet afterwards.

## Three defects this version fixes

**1. Records were sent one HTTP request at a time.** 5,008 separate requests to Apps Script is slow,
and because the old `doPost` sent an email per record it would also blow past Gmail's daily send
quota (100/day on a consumer account). Records now go up 300 at a time, and the batch branch in
`doPost` writes them with a single `setValues()` call and sends no email.

**2. The 302 from `/exec` must be followed as a GET, not re-POSTed.** Apps Script answers a POST
with a redirect to a googleusercontent "echo" URL holding the response body — `doPost` has already
run at that point. Re-POSTing to that URL earns a 405 Method Not Allowed, so `post_to_sheet()`
lets `requests` follow the redirect normally and then checks the body for `success`, since a
redirect that lands somewhere unexpected otherwise looks like a clean 200.

**3. A deployment that requires a Google account 404s anonymous callers.** A browser session signed
in as the owner reaches the script while Python, sending no credentials, is bounced before `doPost`
runs — the request never even appears in the Apps Script execution log. "Who has access" must be
**Anyone**.
