"""Set the attendance clock's internal time from this PC's clock.

Run this when clock_diagnostics.py reports the device time is wrong. It asks
for confirmation first: this writes to the shared physical device, and every
punch recorded afterwards is stamped from what it sets.

A correction that does not hold - the device drifting off again within days -
means the RTC backup battery is flat and needs replacing. Setting the time
only papers over that until the next power cycle.
"""
from datetime import datetime
from zk import ZK

CLOCK_IP = '192.168.1.201'
CLOCK_PORT = 4370

zk = ZK(CLOCK_IP, port=CLOCK_PORT, timeout=5)

print("Connecting to {}:{}...".format(CLOCK_IP, CLOCK_PORT))
conn = zk.connect()

try:
    pc_now = datetime.now()
    device_time = conn.get_time()

    print("")
    print("PC time:      {}".format(pc_now.strftime('%Y-%m-%d %H:%M:%S')))
    print("Device time:  {}".format(device_time.strftime('%Y-%m-%d %H:%M:%S')))
    print("")
    print("This will overwrite the clock's internal time with the PC time above.")
    answer = input("Type YES to continue, anything else to cancel: ").strip()

    if answer != "YES":
        print("Cancelled. The device time was not changed.")
    else:
        conn.set_time(datetime.now())
        print("Device time set. Reading it back:")
        print("  {}".format(conn.get_time().strftime('%Y-%m-%d %H:%M:%S')))
        print("")
        print("Punches recorded from now on carry the corrected date.")
        print("Punches already stored keep the timestamp they were recorded with.")
finally:
    conn.disconnect()
    print("\nDisconnected.")
