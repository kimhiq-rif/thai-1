# Stops the per-punch alert mail, without touching Google.
#
# Every previous attempt edited the Apps Script recipient list, which only
# takes effect once a new version is deployed. Three rounds of that changed
# nothing, so the version running at Google is almost certainly the original -
# the one that still carries the address that keeps receiving mail.
#
# This works on the PC instead. doPost decides whether to send mail from the
# shape of what it receives: a dict is a live punch and may mail, a list is a
# batch and never does. Posting one-item lists writes the same rows and sends
# nothing, whatever version is deployed at the other end.
#
# Reversible: re-run with -Undo.

param(
    [switch]$Undo
)

$ErrorActionPreference = "Stop"

$raw = "https://raw.githubusercontent.com/kimhiq-rif/thai-1/claude/attendance-clock-sheets-sync-4wdsd3/attendance-sync/attendance_service.py"

Write-Host ""
Write-Host "Looking for the running service file ..." -ForegroundColor Cyan

# Every copy, not the first one found. This project has had several installs
# on one PC and six python.exe processes running against one clock at once;
# patching one copy and leaving another still mailing would look exactly like
# the fix having failed.
$targets = Get-ChildItem -Path $env:USERPROFILE -Filter "attendance_service.py" -Recurse -ErrorAction SilentlyContinue |
           Where-Object { $_.FullName -notlike "*.backup" }

if (-not $targets) {
    Write-Host "attendance_service.py not found under $env:USERPROFILE" -ForegroundColor Red
    Write-Host "Wrong PC, or the folder is on another drive."
    exit 1
}

Write-Host ("Found " + @($targets).Count + " copy/copies:") -ForegroundColor Green
foreach ($t in $targets) { Write-Host ("   " + $t.FullName) }
if (@($targets).Count -gt 1) {
    Write-Host ""
    Write-Host "More than one copy exists. All of them will be changed, because" -ForegroundColor Yellow
    Write-Host "there is no way to tell from here which one is running." -ForegroundColor Yellow
}

$from = if ($Undo) { "SEND_EMAILS = False" } else { "SEND_EMAILS = True" }
$to   = if ($Undo) { "SEND_EMAILS = True"  } else { "SEND_EMAILS = False" }

Write-Host ""
Write-Host "Downloading the current version ..." -ForegroundColor Cyan
$fresh = Join-Path $env:TEMP "attendance_service.fresh.py"
Invoke-WebRequest -Uri ($raw + "?v=" + (Get-Random)) -OutFile $fresh

$source = Get-Content $fresh -Raw
if ($source -notmatch [regex]::Escape($from)) {
    Write-Host "The downloaded file does not contain '$from'." -ForegroundColor Red
    Write-Host "Nothing has been changed."
    exit 1
}
$patched = $source -replace [regex]::Escape($from), $to

foreach ($t in $targets) {
    $path = $t.FullName
    # Keep the file that is actually running before replacing it. If anything
    # here is wrong, the backup is the way back.
    Copy-Item $path ($path + ".backup") -Force
    # WriteAllText rather than Set-Content, whose default encoding has mangled
    # this file before.
    [System.IO.File]::WriteAllText($path, $patched)
    Write-Host ("Updated: " + $path) -ForegroundColor Green
}
Remove-Item $fresh -Force -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "=======================================================" -ForegroundColor Yellow
if ($Undo) {
    Write-Host "ALERT EMAILS ARE BACK ON." -ForegroundColor Green
} else {
    Write-Host "ALERT EMAILS ARE OFF." -ForegroundColor Green
    Write-Host ""
    Write-Host "Punches are still written to the Sheet - at the bottom now"
    Write-Host "rather than the top. The monthly report is unaffected."
    Write-Host "Nobody receives a per-punch email any more, including Wirasak."
    Write-Host ""
    Write-Host "To put them back: run this script again with  -Undo"
}
Write-Host ""
Write-Host "LAST STEP: close the black 'Attendance Service' window and" -ForegroundColor Cyan
Write-Host "start it again. The change only applies to a fresh start." -ForegroundColor Cyan
Write-Host "=======================================================" -ForegroundColor Yellow
Write-Host ""
