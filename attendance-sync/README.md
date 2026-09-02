# Attendance clock -> Google Sheets sync

Scripts for pushing punch records from a ZK Teco attendance clock (LAN, `192.168.1.201:4370`)
into a Google Sheet through an Apps Script Web App.

## Files

| File | Where it runs |
| --- | --- |
| `sync_history.py` | Windows PC on the clock's LAN — imports whatever the Sheet has not seen: the original bulk history, and since then the recovery path for punches missed while the listener was down |
| `live_monitor.py` | Same PC — runs for the whole shift, pushing each punch as it happens |
| `attendance_service.py` | Same PC — the unattended version: listens only during LISTEN_WINDOWS, sleeps between them, catches up on what it missed |
| `start_monitor.bat` | Launches the service and restarts it if it exits |
| `install_autostart.ps1` | Registers the scheduled task that runs the batch file at 07:00 daily |
| `test_email.py` | Same PC — sends one fake punch to prove the Gmail alert path works |
| `drill_test.py` | Same PC — a timed, verbose listening run for rehearsing the chain by hand |
| `install_drill.ps1` | Schedules a one-off drill: wake the PC at a given time, listen, stop |
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

Two audiences, set separately at the top of `doPost.gs`:

- **`ALERT_RECIPIENTS`** — one mail per punch, as it happens.
- **`REPORT_RECIPIENTS`** — the end-of-day summary.

`ALERT_WATCHER` is copied on every alert until `ALERT_WATCHER_UNTIL` inclusive, then drops off by
itself. Watching a new system is temporary by intent, and an address that has to be removed by hand
is one that stays on the list long after anyone reads it. Extend the date to keep watching.

`doPost` mails one alert per punch sent as a single object, and writes silently when sent a list.
Both `sync_history.py` and the service's catch-up choose between them by volume: at or under their
email limit each punch goes up on its own and alerts; above it they switch to the silent list.

That limit is the whole reason the split exists. The first import was 5,008 records — 5,008 emails
against a quota of 100/day — while a recovery run after a missed morning is three or four punches
that should alert exactly like live ones do.

Prove the path works before a shift depends on it:

```powershell
python test_email.py
```

That writes one row and should deliver one email. If the response is not `success`, the body names
the cause; an authorization error means the Gmail scope was never granted — open the Apps Script
editor, select `doPost`, press Run once, accept the prompt, then redeploy.

A row in the sheet proves nothing about its alert: `doPost` writes the row before it sends, so mail
can fail on a punch that logged perfectly. When alerts stop arriving, open the deployment URL in a
browser — `doGet` reports `remainingEmailQuota` (0 is why sending throws), `alertsSentFrom` (the
account the mail leaves from, which is where bounces land) and `alertsSentTo` (the addresses as the
deployed code actually has them, typo included). Apps Script → **Executions** then shows the error
text for any `doPost` that failed.

## Running unattended

`attendance_service.py` is the version to leave running. It listens only inside `LISTEN_WINDOWS`
(07:30-10:00 and 15:00-19:00 by default) and sleeps in between, so the clock connection is not held
open all day.

Sleeping does not mean losing punches. When a window opens, the service reads the day's punches off
the clock and sends any it has not already recorded. Up to `MAX_CATCHUP_EMAILS` of them go up one at
a time, each mailing its alert; a backlog larger than that goes up the silent batch path instead,
since dozens of alerts at once are unreadable and would eat the 100/day Gmail quota. On its very
first run it records the day's existing punches without sending them, on the assumption
`sync_history.py` already imported them.

Two files track what has been sent, in two formats: `seen.txt` here, and `seen` (a JSON list of
`<id>_<timestamp>`) written by `sync_history.py`. The service reads both, so a punch one of them
uploaded is not uploaded again by the other.

That matters more than it sounds. Run `sync_history.py` and then start the service, and a version
that reads only its own file treats the punches the other just uploaded as missed — duplicate rows
and duplicate alerts for the same punch.

To start it at 07:00 every morning, from the folder the scripts are in:

```powershell
powershell -ExecutionPolicy Bypass -File install_autostart.ps1
```

That registers a scheduled task rather than a Startup-folder shortcut: a logon trigger misses a
machine that is already awake at 07:00 and re-fires on every mid-day logon. `StartWhenAvailable` is
set, so a PC switched on at 08:30 still starts the service instead of skipping the day.

```powershell
Get-ScheduledTask -TaskName 'Attendance Service'      # check
Start-ScheduledTask -TaskName 'Attendance Service'    # run it now
Unregister-ScheduledTask -TaskName 'Attendance Service' -Confirm:$false   # remove
```

`start_monitor.bat` looks for `attendance_service.py` beside itself first, then in
`Documents\REAPER Media\stella\pyzc` and `Documents\pyzk`, so it works from wherever it is
launched. Closing the service window stops it until the next morning.

## Rehearsing it

```powershell
powershell -ExecutionPolicy Bypass -File install_drill.ps1 -At "10:00" -Minutes 10 -SleepAfter
```

Wakes the PC at 10:00, listens for ten minutes while someone punches, then sleeps it again. The
trigger is one-off, so nothing is left behind changing how the next morning behaves.

It runs `drill_test.py`, not the service, for one reason: the service listens only inside
`LISTEN_WINDOWS`, and 10:01 is outside them. Rehearsing with the service would wake the machine,
find it out of hours, and put it straight back to sleep having proved nothing. `drill_test.py`
ignores the windows and listens for a fixed span instead, which also means the production
configuration is never edited and there is nothing to remember to change back.

**Close any window already running `attendance_service.py` first.** Two listeners on one clock
conflict over the same connection.

The punch is a real punch: it lands in the Sheet as a real row and mails a real alert. That is the
point — the drill proves the whole chain — but the row is data, not a test artifact, so leave it.

Output goes to `drill_log.txt` as well as the console, so a run can be read after the window closes.

## Time zones

Four components each carry their own, and they do not have to agree:

| Component | Where it comes from |
| --- | --- |
| Windows PC | Windows time zone setting — every Python timestamp is `datetime.now()` |
| ZK clock | its own RTC |
| Apps Script project | Project Settings → Time zone |
| Google Sheet | File → Settings → Time zone |

The last two default to the account's location, not the site's. Everything that groups punches into
a day — the daily summary, the report, the watcher expiry — reads `Session.getScriptTimeZone()`, so
a script on Jerusalem time files an early-morning Bangkok punch under the previous day and nothing
in the output looks wrong.

`doGet` reports `scriptTimeZone`, `spreadsheetTimeZone`, `scriptLocalTime` and `bangkokTime`
side by side; `clock_diagnostics.py` reports the PC's and says plainly if it is not UTC+7.

Fix a mismatched script: Apps Script → ⚙ Project Settings → Time zone → **(GMT+07:00) Bangkok**,
then redeploy. Fix the sheet: File → Settings → Time zone → Bangkok.

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
records them that way, so its own clock is wrong when it writes them.

This is live, not historical. Because a live punch inserts at row 1 and pushes earlier ones down,
physical row order is arrival order reversed — and on 2026-09-01 the sheet reads, top to bottom:
2024-06-19, 2119, 2119, 2035, 2035, 2027, then 08:08, 08:04, 08:01, 07:58. The device stamped four
punches correctly that morning and then six garbage dates immediately after, so its clock broke
between one punch and the next.

`attendance_service.py` handles both halves of that:

- **Keeps the device clock right.** It compares the device time to this PC's when a window opens
  and every `CLOCK_CHECK_MINUTES` while listening, and corrects drift over `MAX_DRIFT_SECONDS`.
  Every check that finds drift is appended to `clock_corrections.log`.
- **Refuses to record an impossible date.** A punch dated outside `PLAUSIBLE_YEARS` is written with
  this PC's time instead, with the reported date kept in the status column, so the row is usable
  and the substitution is visible rather than silent.

The PC's own clock is the reference, so it has to be right — Windows keeps it on NTP by default.

`clock_diagnostics.py` answers the same question by hand, and `clock_set_time.py` corrects the
device on demand.

**A log filling up with corrections means the RTC backup battery is flat.** Software correction
only holds until the next power cut; the battery is the actual repair.

Measured on the device (ZKTeco K50/ID, firmware 6.60 of Sep 2019, serial CQU2231261864): on
2026-09-01 at 20:12 it was 13.9 seconds behind the PC — correct. The bad dates are therefore not
steady drift the periodic check would catch, but momentary jumps between one punch and the next,
which is why the substitution matters more than the correction: the clock reads fine whenever you
ask it, and lies only on the punch itself.

## End-of-day report

`sendDailyReport()` mails one summary per day to `REPORT_RECIPIENTS`: entry, exit, hours and punch
count per employee, plus a section listing any punch the clock dated impossibly. It reads the sheet
rather than the device, so it runs on Google's servers and does not care whether the PC is on.

- **Send it now:** Attendance → *Email today's report now*, or open the deployment URL with
  `?action=report`.
- **Schedule it:** Attendance → *Schedule daily report (19:00)*. Installing twice would send the
  report twice, so it clears its own trigger before adding one.

An employee with a single punch is reported as `(no exit recorded)` rather than a zero-hour shift —
one punch means the pair is missing, not that they left the moment they arrived.

`?action=report` only ever mails `REPORT_RECIPIENTS`, so a leaked URL cannot be aimed at anyone else.

## Service notice

`sendServiceNotice()` sends today's times with an apology for an outage, in English and then Thai,
to `REPORT_RECIPIENTS`. It is a menu item and `?action=notice`, deliberately not scheduled: it is
about one specific day.

Both halves print the same rendered table, so the two languages cannot drift apart. The Thai half
dates in the Buddhist era, matching what Windows displays on these machines.

**Bring the sheet up to date before sending it.** The report reads the sheet, not the clock, so
punches the listener missed are absent — and an apology mail that reports everyone as having never
left is worse than none. `python sync_history.py` pulls whatever the device still holds first.

## Removing duplicates

The same punch reaches the Sheet twice when two uploaders disagree about what has already been
sent — `sync_history.py` keeps its record in `seen`, the service in `seen.txt`. They are easy to
miss: the service inserts at row 1 while a batch appends at the bottom, so the two copies of one
punch sit five thousand rows apart.

**Attendance → Remove duplicate rows**, or `?action=dedupe`. A punch is keyed on timestamp and
employee id — nobody punches twice in the same second — and the first occurrence is the one kept.
Trailing blank rows go too.

It rewrites the only copy of the attendance record, so it first copies the tab to `Sheet1_backup`,
replacing any previous backup. One rolling copy: the point is undo, not history.

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
