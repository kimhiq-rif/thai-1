@echo off
REM Starts the attendance service and restarts it if it ever exits.
REM Looks beside itself first, then the folders the scripts have lived in,
REM so the file works whether it is run in place, copied to the desktop, or
REM launched by Task Scheduler from somewhere else entirely.
setlocal
set "SCRIPTDIR=%~dp0"
if exist "%SCRIPTDIR%attendance_service.py" goto found
set "SCRIPTDIR=%USERPROFILE%\Documents\REAPER Media\stella\pyzc\"
if exist "%SCRIPTDIR%attendance_service.py" goto found
set "SCRIPTDIR=%USERPROFILE%\Documents\pyzk\"
if exist "%SCRIPTDIR%attendance_service.py" goto found
echo Could not find attendance_service.py in any of:
echo   %~dp0
echo   %USERPROFILE%\Documents\REAPER Media\stella\pyzc\
echo   %USERPROFILE%\Documents\pyzk\
pause
exit /b 1
:found
cd /d "%SCRIPTDIR%"
title Attendance Service
:loop
python attendance_service.py
echo.
echo Service exited. Restarting in 30 seconds - close this window to stop.
timeout /t 30 >nul
goto loop
