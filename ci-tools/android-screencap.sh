screenshots_dir="screenshots"
screenshots_count=300
wait_time=1

mkdir $screenshots_dir

count=1
while [ $count -le $screenshots_count ]; do
  echo "Capturing screenshot #$count"
  adb devices -l | tail -n +2 | cut -d' ' -f1 | xargs -n1 -I{} sh -c "adb -s {} exec-out screencap -p > $screenshots_dir/{}_$(date +'%Y-%m-%d_%H-%M-%S').png"
  sleep $wait_time
  ((count++))
done

ls -l $screenshots_dir
