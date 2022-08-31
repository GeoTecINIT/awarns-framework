adb devices -l | tail -n +2 | cut -d' ' -f1 | xargs -n1 -I{} sh -c "adb -s {} exec-out screencap -p > screenshots/{}_$(date +'%Y-%m-%d_%H-%M-%S').png"
