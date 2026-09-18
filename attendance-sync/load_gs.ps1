# Puts the full doPost.gs on the clipboard, ready to paste into Apps Script.
#
# Copying it by hand truncated it at line 100, which Apps Script reported as
# "Unexpected end of input" - a real syntax error, caused by an incomplete
# paste rather than by the code. Selecting a thousand lines by hand is the
# fragile step, so this removes it: the file goes to the clipboard whole, or
# the script says why not.

$ErrorActionPreference = "Stop"

$raw = "https://raw.githubusercontent.com/kimhiq-rif/thai-1/claude/attendance-clock-sheets-sync-4wdsd3/attendance-sync/doPost.gs"
$dest = Join-Path $env:USERPROFILE "doPost.gs"

Write-Host ""
Write-Host "Downloading doPost.gs ..." -ForegroundColor Cyan
Invoke-WebRequest -Uri ($raw + "?v=" + (Get-Random)) -OutFile $dest

$text = Get-Content $dest -Raw
$lines = (Get-Content $dest).Count

# A truncated download is the whole failure mode here, so check rather than
# assume: the last function in the file must be present and the brace count
# must balance.
$opens = ([regex]::Matches($text, "\{")).Count
$closes = ([regex]::Matches($text, "\}")).Count

Write-Host ""
Write-Host ("  lines            : " + $lines)
Write-Host ("  braces { }       : " + $opens + " / " + $closes)

if ($lines -lt 900 -or $opens -ne $closes -or $text -notmatch "untrashSpreadsheet") {
    Write-Host ""
    Write-Host "The download looks incomplete. Nothing copied." -ForegroundColor Red
    Write-Host "Run this script again."
    exit 1
}

Set-Clipboard -Value $text

Write-Host ""
Write-Host "=======================================================" -ForegroundColor Yellow
Write-Host "THE WHOLE FILE IS ON THE CLIPBOARD." -ForegroundColor Green
Write-Host ""
Write-Host "Now, in the Apps Script tab:"
Write-Host ""
Write-Host "   1.  click once inside the code"
Write-Host "   2.  Ctrl+A        (selects the old code)"
Write-Host "   3.  Ctrl+V        (pastes this file over it)"
Write-Host "   4.  Ctrl+S        (saves)"
Write-Host ""
Write-Host "Then check the bottom of the editor: the last line should be"
Write-Host ("number " + $lines + ". If it is not, the paste was cut short again.")
Write-Host "=======================================================" -ForegroundColor Yellow
Write-Host ""
