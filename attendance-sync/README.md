# Attendance clock -> Google Sheets sync

Scripts for pushing punch records from a ZK Teco attendance clock (LAN, `192.168.1.201:4370`)
into a Google Sheet through an Apps Script Web App.

## Files

| File | Where it runs |
| --- | --- |
| `sync_history.py` | Windows PC on the clock's LAN — one-off historical import of all stored punches |
| `doPost.gs` | The Sheet's Apps Script project — the Web App endpoint |

## Requirements

```
pip install requests pyzk
```

## Running the historical import

```powershell
cd "C:\Users\P&T COMPUTER\Documents\pyzk"
python sync_history.py
```

Expected output: `Synced 300/5008 records...`, `Synced 600/5008 records...`, and so on.

## Notes on two bugs this version fixes

**1. Records were sent one HTTP request at a time.** 5,008 separate requests to Apps Script is
slow, and because the old `doPost` sent an email per record it would also blow past Gmail's daily
send quota (100/day on a consumer account). Records are now batched 300 at a time, and the batch
branch in `doPost` writes them with a single `setValues()` call and sends no email.

**2. `requests` silently downgraded POST to GET.** Apps Script answers `/exec` with a 302 redirect.
Following a 302, `requests` converts POST to GET, so the Web App invoked `doGet` — which does not
exist — and returned "Script function not found: doGet" as a 404. `post_with_redirect()` sends the
first request with `allow_redirects=False` and re-POSTs to the `Location` URL itself, keeping the
method intact.

## After editing `doPost.gs`

Saving in the Apps Script editor is not enough — the live URL keeps serving the old code until you
redeploy:

Deploy -> Manage deployments -> edit (pencil) -> Version: **New version** -> Deploy

The Web App URL stays the same across new versions of the same deployment.
