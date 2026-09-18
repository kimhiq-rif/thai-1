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

$searchRoots = @((Join-Path $env:USERPROFILE "Documents"), $env:USERPROFILE)
$target = $null
foreach ($root in $searchRoots) {
    if (-not (Test-Path $root)) { continue }
    $target = Get-ChildItem -Path $root -Filter "attendance_service.py" -Recurse -ErrorAction SilentlyContinue |
              Select-Object -First 1
    if ($target) { break }
}

if (-not $target) {
    Write-Host "attendance_service.py not found under $env:USERPROFILE" -ForegroundColor Red
    Write-Host "Wrong PC, or the folder is on another drive."
    exit 1
}

$path = $target.FullName
Write-Host ("Found: " + $path) -ForegroundColor Green

# Keep the file that is actually running before replacing it. If anything here
# is wrong, the backup is the way back.
$backup = $path + ".backup"
Copy-Item $path $backup -Force
Write-Host ("Backed up to: " + $backup) -ForegroundColor DarkGray

Write-Host "Downloading the current version ..." -ForegroundColor Cyan
Invoke-WebRequest -Uri ($raw + "?v=" + (Get-Random)) -OutFile $path

$from = if ($Undo) { "SEND_EMAILS = False" } else { "SEND_EMAILS = True" }
$to   = if ($Undo) { "SEND_EMAILS = True"  } else { "SEND_EMAILS = False" }

$text = Get-Content $path -Raw
if ($text -notmatch [regex]::Escape($from)) {
    Write-Host "Could not find '$from' in the file - nothing changed." -ForegroundColor Red
    Write-Host "Restoring the backup."
    Copy-Item $backup $path -Force
    exit 1
}

# -Raw read and a plain write keeps the file's line endings and encoding as
# Python expects them; Set-Content default encoding has mangled this file before.
[System.IO.File]::WriteAllText($path, ($text -replace [regex]::Escape($from), $to))

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
