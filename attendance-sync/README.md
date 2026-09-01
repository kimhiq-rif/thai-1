# Attendance clock -> Google Sheets sync

Scripts for pushing punch records from a ZK Teco attendance clock (LAN, `192.168.1.201:4370`)
into a Google Sheet through an Apps Script Web App.

## Files

| File | Where it runs |
| --- | --- |
| `sync_history.py` | Windows PC on the clock's LAN — one-off historical import of all stored punches |
| `live_monitor.py` | Same PC — runs for the whole shift, pushing each punch as it happens |
| `attendance_service.py` | Same PC — the unattended version: listens only during LISTEN_WINDOWS, sleeps between them, catches up on what it missed |
| `start_monitor.bat` | Launches the service and restarts it if it exits; shortcut this into `shell:startup` |
| `test_email.py` | Same PC — sends one fake punch to prove the Gmail alert path works |
| `clock_diagnostics.py` | Same PC — reads the device's own clock and compares it to the PC's |
| `clock_set_time.py` | Same PC — corrects the device clock from the PC's (asks before writing) |
| `doPost.gs` | The Sheet's Apps Script project — the Web App endpoint |
| `weburl.txt` | Created locally next to the scripts; holds the Web App URL |

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

## Emails

Only the single-record path in `doPost` sends mail, so alerts arrive from `live_monitor.py` and
never from the bulk import — 5,008 imported punches would otherwise mean 5,008 emails against a
quota of 100/day on a consumer Gmail account.

Prove the path works before a shift depends on it:

```powershell
python test_email.py
```

That writes one row and should deliver one email. If the response is not `success`, the body names
the cause; an authorization error means the Gmail scope was never granted — open the Apps Script
editor, select `doPost`, press Run once, accept the prompt, then redeploy.

## Running unattended

`attendance_service.py` is the version to leave running. It listens only inside `LISTEN_WINDOWS`
(06:30-10:00 and 15:00-19:00 by default) and sleeps in between, so the clock connection is not held
open all day.

Sleeping does not mean losing punches. When a window opens, the service reads the day's punches off
the clock and sends any it has not already recorded in `seen.txt`. Those go up the batch path, which
writes the rows without mailing: an alert hours late is noise, and a backlog of them could spend the
whole daily Gmail quota at once. On its very first run it records the day's existing punches without
sending them, on the assumption `sync_history.py` already imported them.

To start it at logon:

1. Press Win+R, type `shell:startup`, press Enter.
2. Put `start_monitor.bat` in that folder — either right-drag it there and choose "Create shortcuts
   here", or just copy the file itself. A copy has no scripts beside it, so the batch file falls
   back to `%USERPROFILE%\Documents\pyzk` when `attendance_service.py` is not next to it.

The service window then opens automatically at every logon. Closing the window stops it.

## Daily summary tab

The log holds one row per punch, so once rows are sorted by time a day's exits cluster together
above that day's entries and the pairing is invisible. `buildDailySummary()` collapses the log into
one row per employee per day — first punch as Entry, last as Exit, plus hours and a punch count —
and writes it to a `Daily` tab.

Run it from the Sheet: **Attendance → Rebuild daily summary** (the menu appears after a reload,
since `onOpen` only runs when the file is opened).

Punches stamped outside 2020–next year are left out and counted in a note beside the header. A
clock that has lost its date writes them in 2119 or 2035, and sorted newest-first they would
otherwise sit on top of every real day.

## Impossible punch dates

Rows have arrived stamped 2027, 2035 and 2119. They are not corrupted in transit: the device
records them that way, so its own clock is wrong when it writes them. Confirm with:

```powershell
python clock_diagnostics.py
```

which prints the device time beside the PC time. If they disagree, `python clock_set_time.py`
corrects the device. A correction that does not hold means the RTC backup battery is flat, and
setting the time only lasts until the next power cycle.

Note which rows are affected before assuming it is only historical. Live punches insert at row 1
and push earlier ones down, so the physical row order is arrival order reversed — a bad-date row
sitting above a correctly dated one arrived *after* it, and the clock is getting the date wrong
right now rather than having done so once in the past.

## Row order

The Sheet reads newest-first. `sync_history.py` sorts the punches descending before sending them,
and `doPost` puts a live punch in at row 1 rather than appending it, so new punches keep landing
above the imported history instead of underneath the oldest row.

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
