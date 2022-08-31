screenshots_dir="screenshots"
mkdir $screenshots_dir
cd $screenshots_dir

echo "Recording device screen for $1 seconds"

video_path="/sdcard/video.mp4"
adb shell screenrecord $video_path --time-limit $1
adb pull $video_path
adb shell rm $video_path

cd ..
