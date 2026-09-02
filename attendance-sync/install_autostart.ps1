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
# WakeToRun pulls the machine out of sleep at 07:00. It cannot do anything for
# a machine that is fully shut down - only the BIOS can wake that - so if the PC
# is switched off overnight it has to be left sleeping instead, or turned on by
# hand. StartWhenAvailable then covers a late start: a PC woken at 08:30 runs
# the task on the way up rather than skipping the day.
$settings = New-ScheduledTaskSettingsSet `
    -StartWhenAvailable `
    -WakeToRun `
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

# WakeToRun does nothing unless wake timers are enabled in the power scheme,
# and it fails silently when they are not - the machine simply sleeps through
# 07:00 with a task that looked correctly registered.
try {
    powercfg /setacvalueindex SCHEME_CURRENT SUB_SLEEP RTCWAKE 1 2>&1 | Out-Null
    powercfg /setdcvalueindex SCHEME_CURRENT SUB_SLEEP RTCWAKE 1 2>&1 | Out-Null
    powercfg /setactive SCHEME_CURRENT 2>&1 | Out-Null
    Write-Host "Wake timers enabled in the current power scheme." -ForegroundColor Green
} catch {
    Write-Host "Could not enable wake timers automatically: $_" -ForegroundColor Yellow
    Write-Host "Run this script as Administrator, or enable them by hand:"
    Write-Host "  Control Panel > Power Options > Change plan settings >"
    Write-Host "  Change advanced power settings > Sleep > Allow wake timers > Enable"
}

Write-Host ""
Write-Host "Registered '$taskName': runs $bat daily at 07:00." -ForegroundColor Green
Write-Host "The task is set to wake the PC from sleep. A PC that is fully shut"
Write-Host "down cannot be woken this way - leave it sleeping, not off."
Write-Host ""
Write-Host "Check it:    Get-ScheduledTask -TaskName '$taskName'"
Write-Host "Test it now: Start-ScheduledTask -TaskName '$taskName'"
Write-Host "Remove it:   Unregister-ScheduledTask -TaskName '$taskName' -Confirm:`$false"
Write-Host ""
Write-Host "Confirm the wake is actually armed - this must list the task:"
Write-Host "  powercfg /waketimers"
