@echo off
REM Starts the attendance service and restarts it if it ever exits.
REM Works whether this file is shortcut into shell:startup or copied there
REM outright: a copy sits beside no scripts, so %~dp0 points at the startup
REM folder and the fallback below finds the real one.
setlocal
set "SCRIPTDIR=%~dp0"
if not exist "%SCRIPTDIR%attendance_service.py" set "SCRIPTDIR=%USERPROFILE%\Documents\pyzk\"
if not exist "%SCRIPTDIR%attendance_service.py" (
  echo Could not find attendance_service.py in:
  echo   %~dp0
  echo   %USERPROFILE%\Documents\pyzk\
  pause
  exit /b 1
)
cd /d "%SCRIPTDIR%"
title Attendance Service
:loop
python attendance_service.py
echo.
echo Service exited. Restarting in 30 seconds - close this window to stop.
timeout /t 30 >nul
goto loop
