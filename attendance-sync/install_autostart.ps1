# Registers a Windows scheduled task that starts the attendance service at
# 07:00 every day.
#
# Run it once, from the folder the scripts live in:
#     powershell -ExecutionPolicy Bypass -File install_autostart.ps1
#
# A logon-triggered shortcut would miss a machine that is already awake at 07:00
# and fire on every mid-day logon, so this is a daily time trigger instead, with
# StartWhenAvailable so a PC switched on late still starts the service rather
# than skipping the day.

$ErrorActionPreference = "Stop"

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$bat = Join-Path $scriptDir "start_monitor.bat"

if (-not (Test-Path $bat)) {
    Write-Host "start_monitor.bat is not in $scriptDir." -ForegroundColor Red
    Write-Host "Put this script in the same folder as the attendance scripts and run it again."
    exit 1
}

$taskName = "Attendance Service"

$action = New-ScheduledTaskAction -Execute "cmd.exe" -Argument "/c `"$bat`"" -WorkingDirectory $scriptDir
$trigger = New-ScheduledTaskTrigger -Daily -At 7am
$settings = New-ScheduledTaskSettingsSet `
    -StartWhenAvailable `
    -AllowStartIfOnBatteries `
    -DontStopIfGoingOnBatteries `
    -ExecutionTimeLimit ([TimeSpan]::Zero)

# Re-registering rather than adding: running this twice should leave one task,
# not two services fighting over the same clock connection.
if (Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue) {
    Write-Host "Replacing the existing '$taskName' task."
    Unregister-ScheduledTask -TaskName $taskName -Confirm:$false
}

Register-ScheduledTask -TaskName $taskName -Action $action -Trigger $trigger -Settings $settings `
    -Description "Starts the ZK attendance listener each morning." | Out-Null

Write-Host ""
Write-Host "Registered '$taskName': runs $bat daily at 07:00." -ForegroundColor Green
Write-Host ""
Write-Host "Check it:    Get-ScheduledTask -TaskName '$taskName'"
Write-Host "Test it now: Start-ScheduledTask -TaskName '$taskName'"
Write-Host "Remove it:   Unregister-ScheduledTask -TaskName '$taskName' -Confirm:`$false"
