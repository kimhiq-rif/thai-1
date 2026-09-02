"""One-shot diagnostic: read the clock's own idea of the time and compare it to
the PC's, plus whatever device info the firmware exposes.

Run this any time punches show up with impossible dates (2027, 2035, 2119 have
all appeared). If the device time is wrong, that confirms the clock's internal
RTC (almost certainly its backup battery) rather than anything in this
pipeline - the fix is on the clock itself, via set_time() below or its own
menu, not in the Python or Apps Script.
"""
import time as time_module
from datetime import datetime
from zk import ZK

CLOCK_IP = '192.168.1.201'
CLOCK_PORT = 4370

zk = ZK(CLOCK_IP, port=CLOCK_PORT, timeout=5)

print("Connecting to {}:{}...".format(CLOCK_IP, CLOCK_PORT))
conn = zk.connect()
print("Connected.\n")

try:
    pc_now = datetime.now()
    device_time = conn.get_time()
    # In seconds, not as a timedelta: Python renders a small negative one as
    # "-1 day, 23:59:46", which reads like the device is a day out when it is
    # thirteen seconds behind.
    drift = (device_time - pc_now).total_seconds()

    # Every Python timestamp here comes from datetime.now(), which is the PC's
    # local time. If Windows is not on Bangkok time, every punch this machine
    # uploads carries the wrong hour.
    offset = -time_module.timezone / 3600
    if time_module.daylight and time_module.localtime().tm_isdst:
        offset = -time_module.altzone / 3600
    print("PC time zone: {} (UTC{:+g})".format(
        time_module.localtime().tm_zone if hasattr(time_module.localtime(), 'tm_zone')
        else time_module.tzname[0], offset))
    if abs(offset - 7) > 0.01:
        print("  *** Not UTC+7. Thailand is UTC+7 - check Windows time zone. ***")
    print("PC time:      {}".format(pc_now.strftime('%Y-%m-%d %H:%M:%S')))
    print("Device time:  {}".format(device_time.strftime('%Y-%m-%d %H:%M:%S')))
    print("Difference:   {:+.1f} seconds ({})".format(
        drift, "device is behind" if drift < 0 else "device is ahead"))
    if abs(drift) > 120:
        print("")
        print("*** The device clock is wrong. This is a hardware problem on")
        print("*** the clock (commonly a dying RTC/backup battery), not the")
        print("*** sync scripts. New punches will keep getting bad timestamps")
        print("*** until this is corrected.")
    else:
        print("")
        print("Device clock matches the PC within 2 minutes - looks fine right now.")

    def try_get(label, fn):
        try:
            print("{}: {}".format(label, fn()))
        except Exception as e:
            print("{}: (not supported by this firmware: {})".format(label, e))

    print("\nDevice info:")
    try_get("  Firmware version", conn.get_firmware_version)
    try_get("  Serial number", conn.get_serialnumber)
    try_get("  Platform", conn.get_platform)
    try_get("  Device name", conn.get_device_name)
    try_get("  Face algorithm version", conn.get_face_version)
    try_get("  Fingerprint algorithm version", conn.get_fp_version)

    users = conn.get_users()
    print("\n{} users enrolled on the device.".format(len(users)))

finally:
    conn.disconnect()
    print("\nDisconnected.")
