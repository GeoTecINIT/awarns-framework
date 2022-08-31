screenshots_dir="screenshots"
time=$1
reps=$2

function record() {
    num=$1

    echo "Recording device screen for $time seconds ($num/$reps)"

    video_path="/sdcard/video-$num.mp4"
    adb shell screenrecord $video_path --time-limit $time
    adb pull $video_path
    adb shell rm $video_path
}

mkdir $screenshots_dir
cd $screenshots_dir

count=1
while [ $count -le $reps ]; do
    record $count
    ((count++))
done

cd ..
