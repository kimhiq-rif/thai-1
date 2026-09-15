# Finds the attendance spreadsheet when it has vanished from Google Drive.
#
# Nothing here changes anything: it locates weburl.txt, calls the deployed web
# app, and prints what the script says about the file it is bound to. The web
# app runs as its owner regardless of who calls it, so this answers the
# question even from a PC signed in to the wrong Google account - which is
# itself the most common reason a spreadsheet stops appearing in Drive search.

$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "Looking for weburl.txt ..." -ForegroundColor Cyan

# Documents first, because that is where it always is, and recursing the whole
# profile means walking AppData - thousands of folders for one known filename.
$searchRoots = @(
    (Join-Path $env:USERPROFILE "Documents"),
    $env:USERPROFILE
)

$found = $null
foreach ($root in $searchRoots) {
    if (-not (Test-Path $root)) { continue }
    $found = Get-ChildItem -Path $root -Filter "weburl.txt" -Recurse -ErrorAction SilentlyContinue |
             Select-Object -First 1
    if ($found) { break }
}

if (-not $found) {
    Write-Host ""
    Write-Host "weburl.txt was not found anywhere under $env:USERPROFILE" -ForegroundColor Red
    Write-Host "This is probably the wrong PC, or the pyzk folder is on another drive."
    Write-Host "If you know the /exec URL, run this instead:"
    Write-Host '   Invoke-RestMethod -Uri "PASTE_YOUR_EXEC_URL_HERE" | ConvertTo-Json -Depth 5'
    exit 1
}

Write-Host ("Found: " + $found.FullName) -ForegroundColor Green

$url = (Get-Content $found.FullName -Raw).Trim()
if (-not $url.StartsWith("http")) {
    Write-Host "weburl.txt does not contain a URL. Its contents are:" -ForegroundColor Red
    Write-Host $url
    exit 1
}

Write-Host ""
Write-Host "Asking the script where the spreadsheet is ..." -ForegroundColor Cyan
Write-Host ""

try {
    $r = Invoke-RestMethod -Uri $url -Method Get -TimeoutSec 60
} catch {
    Write-Host "The web app did not answer." -ForegroundColor Red
    Write-Host $_.Exception.Message
    Write-Host ""
    Write-Host "That usually means the deployment was removed or its access is"
    Write-Host "no longer set to 'Anyone'. It does NOT mean the spreadsheet is gone."
    exit 1
}

$r | ConvertTo-Json -Depth 5

Write-Host ""
Write-Host "=======================================================" -ForegroundColor Yellow
if ($r.spreadsheetUrl) {
    Write-Host "THE SPREADSHEET EXISTS. Open this link:" -ForegroundColor Green
    Write-Host ""
    Write-Host ("   " + $r.spreadsheetUrl) -ForegroundColor White
    Write-Host ""
    Write-Host ("   Name: " + $r.spreadsheetName)
    Write-Host ("   Rows: " + $r.rowsInTab)
    Write-Host ""
    Write-Host ("It belongs to this Google account: " + $r.alertsSentFrom) -ForegroundColor Yellow
    Write-Host "If that is not the account your browser is signed in to, that is"
    Write-Host "the whole explanation - Drive only ever searches the account you"
    Write-Host "are in. Sign in as that account and the file will be there."
}
Write-Host "=======================================================" -ForegroundColor Yellow
Write-Host ""
