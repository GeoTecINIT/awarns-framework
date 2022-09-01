pid=""

echo "Waiting for app to start..."
while [ -z $pid ]; do
  pid=$(adb shell pidof org.nativescript.plugindemo)
  sleep 1
done
echo "App started with PID: $pid. Printing logs..."
adb logcat --pid=$pid
