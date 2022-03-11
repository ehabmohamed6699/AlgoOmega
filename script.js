let boxes = document.getElementsByClassName("box");
let soon = document.getElementsByClassName("soon");
let videoSrc = [
  "./videos/Lecture 1 - Part 1.m4v",
  "./videos/Lecture 1 - Part 2.m4v",
  "./videos/Lecture 1 - Part 2.m4v",
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
