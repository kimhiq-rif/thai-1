@echo off
REM Starts the attendance service and restarts it if it ever exits.
REM Put a shortcut to this file in shell:startup to run it at logon.
cd /d "%~dp0"
title Attendance Service
:loop
python attendance_service.py
echo.
echo Service exited. Restarting in 30 seconds - close this window to stop.
timeout /t 30 >nul
goto loop
