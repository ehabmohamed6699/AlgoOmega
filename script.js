let boxes = document.getElementsByClassName("box");
let soon = document.getElementsByClassName("soon");
let videoSrc = [
  "./videos/Lecture 1 - Part 1.m4v",
  "./videos/Lecture 1 - Part 2.m4v",
  "./videos/Lecture 2 - Part 1.m4v",
  "./videos/Recursion.m4v",
  "./videos/Master Method.m4v",
  "./videos/Lecture 3 - Part 1.mp4",
  "./videos/Lecture 3 - Part 2.m4v",
  "./videos/Lecture 4 - Part 1.m4v",
  "./videos/Lecture 4 - Part 2.m4v",
  "./videos/Lecture 5 - Part 1.m4v",
  "./videos/Lecture 5 - Part 2.mp4",
  "./videos/Lecture 6 - Part 1.mp4",
];

for (let i = 0; i < boxes.length; i++) {
  boxes[i].onclick = function () {
    document.querySelector(".play").classList.toggle("closed");
    document
      .querySelector(".play")
      .querySelector("video").src = `${videoSrc[i]}`;
  };
}
for (let i = 0; i < soon.length; i++) {
  soon[i].onclick = function () {
    window.alert("Video Will Be Avilable Soon");
  };
}

document.getElementById("close-play").onclick = function () {
  document.querySelector(".play").classList.toggle("closed");
  document.querySelector(".play").querySelector("video").src = "";
};
