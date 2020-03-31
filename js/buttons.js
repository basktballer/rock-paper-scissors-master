// const hamburgerMenu = document.getElementsById("navbar-hamburger");
// const closeButton = document.getElementById("navbar-close");
// const navMenu = document.getElementById("nav-mobile");


const rockButton = document.querySelector(".rock-div");
const paperButton = document.querySelector(".paper-div");
const scissorsButton = document.querySelector(".scissors-div");
const lizardButton = document.querySelector(".lizard-div");
const spockButton = document.querySelector(".spock-div");
const rulesButton = document.querySelector(".rules-button");
const rulesPopup = document.querySelector(".rules-popup");
const closeButton = document.querySelector(".close-button");

const scoreOutput = document.getElementById("score-output");
let score = 0;

rockButton.addEventListener('click', function (event) {
  score = scoreOutput.innerHTML;
  score++;
  scoreOutput.innerHTML = score;
});

paperButton.addEventListener('click', function (event) {
  score = scoreOutput.innerHTML;
  score++;
  scoreOutput.innerHTML = score;
});

scissorsButton.addEventListener('click', function (event) {
  score = scoreOutput.innerHTML;
  score++;
  scoreOutput.innerHTML = score;
});

lizardButton.addEventListener('click', function (event) {
  score = scoreOutput.innerHTML;
  score++;
  scoreOutput.innerHTML = score;
});

spockButton.addEventListener('click', function (event) {
  score = scoreOutput.innerHTML;
  score++;
  scoreOutput.innerHTML = score;
});

rulesButton.addEventListener('click', function (event) {
  rulesPopup.style.display = "flex";
})

closeButton.addEventListener('click', function (event) {
  rulesPopup.style.display = "none";
})
