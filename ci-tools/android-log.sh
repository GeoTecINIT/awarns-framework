pid=-1
log_pid=-1

echo "Waiting for app to start..."
while [ 1 ]; do
  new_pid=$(adb shell pidof org.nativescript.plugindemo)
  if ! [ -z $new_pid ] && [ $new_pid -ne $pid ]; then

    if [ $log_pid -ne -1 ]; then
      echo "Killing previous log process ($log_pid)"
      kill $log_pid
    fi

    pid=$new_pid

    echo "App start with PID: $pid. Printing logs..."
    adb logcat --pid=$pid &
    log_pid=$!
  fi
  sleep 1
done
