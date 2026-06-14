// console.log(document)
const playingField = document.getElementById("playing-field");
console.log(playingField);
const downField = document.getElementById("down");
console.log(downField);
console.log(down.innerHTML);
const innerPlaying = document.getElementById("playing-field").innerHTML;
console.log(innerPlaying);
playingField.style.backgroundColor = "blue";
const ballField = document.getElementById("ball");
ballField.style.backgroundColor = "yellow";
document.getElementById("ball").style.left = "0px";

const container = document.getElementById("container");
const header2 = document.createElement("h2");
header2.innerHTML = "My Game";
header2.setAttribute("class", "text-h2");
container.appendChild(header2);

const getPxNumber = function (pxNumber) {
  return Number(pxNumber.replace("px", ""));
};

const playFieldElement = document.getElementById("playing-field");
const containerWidth = getPxNumber(getComputedStyle(playFieldElement).width);
const containerHeight = getPxNumber(getComputedStyle(playFieldElement).height);
const ballElement = document.getElementById("ball");
const ballWidth = getPxNumber(getComputedStyle(ballElement).width);
const ballHeight = getPxNumber(getComputedStyle(ballElement).height);


const rightArrow = document.getElementById("right");
rightArrow.onclick = function () {
  moveRight();
};

const leftArrow = document.getElementById("left");
leftArrow.onclick = function () {
  moveLeft();
};

const downArrow = document.getElementById("down");
downArrow.onclick = function () {
  moveDown();
};

const upArrow = document.getElementById("up");
upArrow.onclick = function () {
  moveUp();
};

const moveRight = function () {
  const ballLeft = getComputedStyle(ballElement).left;
  let num = getPxNumber(ballLeft);
  if (num + 15 + ballWidth < containerWidth) num += 15;
  document.getElementById("ball").style.left = num.toString() + "px";
};

const moveLeft = function () {
  let ballLeft = document.getElementById("ball").style.left;
  let num = getPxNumber(ballLeft);
  if (num > 0) num -= 15;
  document.getElementById("ball").style.left = num.toString() + "px";
};

const moveUp = function () {
  let ballTop = document.getElementById("ball").style.top;
  let num = getPxNumber(ballTop);
  if (num > 0) num -= 15;
  document.getElementById("ball").style.top = num.toString() + "px";
  console.log(ballTop);
};

const moveDown = function () {
  const ballTop = getComputedStyle(ballElement).top;
  let num = getPxNumber(ballTop);
  if (num + 15 + ballHeight < containerHeight) num += 15;
  document.getElementById("ball").style.top = num.toString() + "px";
};
