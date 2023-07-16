var video = document.getElementsByTagName("video")[0],
  vidSrc = document.getElementById("videoSrc"),
  index = 0;

const srcArr = [
  "./videos/vid_num_1.mp4",
  "./videos/vid_num_2.mp4",
  "./videos/vid_num_3.mp4",
];

video.src = srcArr[index];
video.addEventListener("ended", function () {
  index++;
  video.play();
  if (index == 3) index = 0;
  video.src = srcArr[index];
});
