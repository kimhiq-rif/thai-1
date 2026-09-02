<#
Schedules a one-off rehearsal: wake the PC, listen for real punches, stop.

    powershell -ExecutionPolicy Bypass -File install_drill.ps1 -At "10:00"
    powershell -ExecutionPolicy Bypass -File install_drill.ps1 -At "10:00" -Minutes 10 -SleepAfter

The task fires once and never again, so nothing is left behind changing how
tomorrow behaves. It runs drill_test.py rather than the service, because the
service listens only inside its configured windows - at 10:05 it would wake,
find itself outside them, and go straight back to sleep having proved nothing.
#>
param(
    [Parameter(Mandatory = $true)]
    [string]$At,                    # "10:00", today or tomorrow
    [int]$Minutes = 15,
    [switch]$SleepAfter
)

$ErrorActionPreference = "Stop"

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$drill = Join-Path $scriptDir "drill_test.py"
if (-not (Test-Path $drill)) {
    Write-Host "drill_test.py is not in $scriptDir." -ForegroundColor Red
    exit 1
}

$python = (Get-Command python -ErrorAction SilentlyContinue).Source
if (-not $python) {
    Write-Host "python is not on PATH." -ForegroundColor Red
    exit 1
}

# A time that has already passed today means tomorrow, which is what someone
# scheduling a 10:00 drill at 22:00 means.
$when = [datetime]::ParseExact($At, "HH:mm", $null)
$when = (Get-Date -Hour $when.Hour -Minute $when.Minute -Second 0)
if ($when -le (Get-Date)) {
    $when = $when.AddDays(1)
}

$taskName = "Attendance Drill"
$arguments = "drill_test.py $Minutes"
if ($SleepAfter) { $arguments += " --sleep" }

$action = New-ScheduledTaskAction -Execute $python -Argument $arguments -WorkingDirectory $scriptDir
$trigger = New-ScheduledTaskTrigger -Once -At $when
$settings = New-ScheduledTaskSettingsSet `
    -StartWhenAvailable `
    -WakeToRun `
    -AllowStartIfOnBatteries `
    -DontStopIfGoingOnBatteries `
    -ExecutionTimeLimit ([TimeSpan]::FromMinutes($Minutes + 10))

if (Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue) {
    Unregister-ScheduledTask -TaskName $taskName -Confirm:$false
}

Register-ScheduledTask -TaskName $taskName -Action $action -Trigger $trigger -Settings $settings `
    -Description "One-off attendance system rehearsal." | Out-Null

Write-Host ""
Write-Host "Drill scheduled for $($when.ToString('yyyy-MM-dd HH:mm'))." -ForegroundColor Green
Write-Host "  Listens for : $Minutes minutes"
Write-Host "  Sleeps after: $(if ($SleepAfter) { 'yes' } else { 'no' })"
Write-Host ""
Write-Host "Before sleeping the PC, close any window already running"
Write-Host "attendance_service.py. Two listeners on one clock conflict." -ForegroundColor Yellow
Write-Host ""
Write-Host "Check:  Get-ScheduledTask -TaskName '$taskName' | Get-ScheduledTaskInfo"
Write-Host "Cancel: Unregister-ScheduledTask -TaskName '$taskName' -Confirm:`$false"
