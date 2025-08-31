const click = document.querySelector("button");
const audio = document.querySelector("audio");
const photo = document.querySelector(".photo");
const text1 = document.querySelector("#left");
const text2 = document.querySelector("#right");
const bg = document.querySelector("body");

click.addEventListener("click", () => {
  console.log("Hello Mr. Iland");
  audio.play();
  photo.style.display = "block";
  click.style.display = "none";
  text1.style.display = "block";
  text2.style.display = "block";
  bg.style.backgroundColor = "white";
});
