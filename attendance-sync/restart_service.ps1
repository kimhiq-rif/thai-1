# Restarts the attendance service so a changed attendance_service.py takes
# effect. Python reads the file once, at startup: editing it changes nothing
# until the running process is replaced.
#
# The service is started by Task Scheduler and kept alive by a restart loop in
# start_monitor.bat, so there is no window to close and reopen. Ending the
# python process is enough - the loop starts a fresh one, reading the new file.
# If nothing is running at all, the scheduled task is started instead.

$ErrorActionPreference = "Stop"
$taskName = "Attendance Service"

Write-Host ""
Write-Host "Looking for the running service ..." -ForegroundColor Cyan

# Match on the command line, not the image name: unrelated python programs
# should not be killed, and this PC has run several of these at once before.
$procs = @(Get-CimInstance Win32_Process -Filter "Name = 'python.exe'" -ErrorAction SilentlyContinue |
           Where-Object { $_.CommandLine -and $_.CommandLine -like "*attendance_service*" })

if ($procs.Count -eq 0) {
    Write-Host "Nothing is running." -ForegroundColor Yellow
    Write-Host "Starting the scheduled task instead ..." -ForegroundColor Cyan
    try {
        Start-ScheduledTask -TaskName $taskName
        Write-Host ""
        Write-Host "Started. A window titled 'Attendance Service' should appear." -ForegroundColor Green
    } catch {
        Write-Host ""
        Write-Host "Could not start the task '$taskName': $($_.Exception.Message)" -ForegroundColor Red
        Write-Host "Run install_autostart.ps1 to register it."
        exit 1
    }
} else {
    Write-Host ("Found " + $procs.Count + " running copy/copies. Stopping:") -ForegroundColor Green
    foreach ($p in $procs) {
        Write-Host ("   PID " + $p.ProcessId)
        Stop-Process -Id $p.ProcessId -Force -ErrorAction SilentlyContinue
    }
    Write-Host ""
    Write-Host "Stopped. start_monitor.bat restarts it automatically within" -ForegroundColor Green
    Write-Host "30 seconds, and the new one reads the changed file." -ForegroundColor Green
}

Write-Host ""
Write-Host "=======================================================" -ForegroundColor Yellow
Write-Host "WHAT TO LOOK FOR in the black Attendance Service window:" -ForegroundColor Yellow
Write-Host ""
Write-Host "  a line near the top reading   Alert emails: OFF"
Write-Host ""
Write-Host "If it reads ON, the change did not reach the copy that is"
Write-Host "running - re-run stop_emails.ps1 and then this script again."
Write-Host "=======================================================" -ForegroundColor Yellow
Write-Host ""
