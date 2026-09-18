# Answers "why is this address still getting an email on every punch?"
#
# Removing an address from ALERT_RECIPIENTS only stops mail that is being sent
# TO it. There are three other ways the same mail reaches the same mailbox, and
# the recipient list is powerless against all three:
#
#   1. The deployed script is older than the edited one. Editing the code does
#      not change what is running; only Deploy -> New version does.
#   2. The script SENDS AS that account. GmailApp sends from whichever account
#      authorised the script, and Gmail files a copy of every sent message in
#      that account's own mailbox. One per punch, looking exactly like received
#      mail in the conversation view.
#   3. Forwarding or a filter is copying mail addressed elsewhere into it.
#
# This asks the live deployment what it is actually doing and says which of the
# three it is. It changes nothing.

param(
    [string]$Address = "info@stellabungalows.com"
)

$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "Looking for weburl.txt ..." -ForegroundColor Cyan

$searchRoots = @((Join-Path $env:USERPROFILE "Documents"), $env:USERPROFILE)
$found = $null
foreach ($root in $searchRoots) {
    if (-not (Test-Path $root)) { continue }
    $found = Get-ChildItem -Path $root -Filter "weburl.txt" -Recurse -ErrorAction SilentlyContinue |
             Select-Object -First 1
    if ($found) { break }
}

if (-not $found) {
    Write-Host "weburl.txt not found under $env:USERPROFILE - wrong PC?" -ForegroundColor Red
    exit 1
}

$url = (Get-Content $found.FullName -Raw).Trim()
Write-Host ("Using: " + $found.FullName) -ForegroundColor Green
Write-Host ""
Write-Host "Asking the LIVE deployment what it is doing ..." -ForegroundColor Cyan
Write-Host ""

try {
    $r = Invoke-RestMethod -Uri $url -Method Get -TimeoutSec 60
} catch {
    Write-Host "The web app did not answer: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

Write-Host ("  punch alerts enabled : " + $r.punchAlertsEnabled)
Write-Host ("  alerts addressed to  : " + $r.alertsSentTo)
Write-Host ("  alerts sent FROM     : " + $r.alertsSentFrom)
Write-Host ("  email quota left     : " + $r.remainingEmailQuota)
Write-Host ""
Write-Host "=======================================================" -ForegroundColor Yellow

$addressedTo = [string]$r.alertsSentTo
$sentFrom    = [string]$r.alertsSentFrom

if ($addressedTo -like ("*" + $Address + "*")) {
    Write-Host "CAUSE 1: STALE DEPLOYMENT" -ForegroundColor Red
    Write-Host ""
    Write-Host "$Address is still in the live recipient list, which means the"
    Write-Host "running version predates the edit. The code was saved but not"
    Write-Host "deployed."
    Write-Host ""
    Write-Host "FIX: Apps Script -> Deploy -> Manage deployments -> pencil icon"
    Write-Host "     -> Version: NEW VERSION -> Deploy. Saving alone does nothing."
}
elseif ($sentFrom -eq $Address) {
    Write-Host "CAUSE 2: IT IS THIS ACCOUNT'S OWN SENT MAIL" -ForegroundColor Red
    Write-Host ""
    Write-Host "The script SENDS AS $Address."
    Write-Host "Gmail keeps a copy of every message an account sends, so each"
    Write-Host "alert lands in that mailbox as sent mail. It is not on the"
    Write-Host "recipient list and never was - removing it changed nothing and"
    Write-Host "never could."
    Write-Host ""
    Write-Host "PROOF: open one of those emails and look at the To: line. It"
    Write-Host "       will say $addressedTo, not $Address."
    Write-Host ""
    Write-Host "FIX: either turn the alerts off (SEND_PUNCH_ALERTS = false), or"
    Write-Host "     re-authorise the Apps Script project from a different"
    Write-Host "     Google account so it stops sending as this one."
}
else {
    Write-Host "CAUSE 3: FORWARDING OR A FILTER" -ForegroundColor Red
    Write-Host ""
    Write-Host "The live deployment addresses alerts to:"
    Write-Host ("    " + $addressedTo)
    Write-Host "and sends them from:"
    Write-Host ("    " + $sentFrom)
    Write-Host "Neither is $Address, so the script is not the one delivering"
    Write-Host "mail there. Something is copying it in."
    Write-Host ""
    Write-Host "FIX: in the $Address mailbox, open one alert, choose"
    Write-Host "     'Show original', and read the Delivered-To and To lines -"
    Write-Host "     they name the route. Then check Gmail Settings ->"
    Write-Host "     Forwarding and POP/IMAP, and Settings -> Filters, on the"
    Write-Host "     account in the To: line."
}

Write-Host "=======================================================" -ForegroundColor Yellow
Write-Host ""
