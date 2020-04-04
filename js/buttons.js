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
const selectionLayout = document.querySelector(".selection-layout")
const gameLayout = document.querySelector(".game-layout")

const scoreOutput = document.getElementById("score-output");
let score = 0;
let winner = "";



rockButton.addEventListener('click', function (event) {
  playGame('rock');
});

paperButton.addEventListener('click', function (event) {
  playGame('paper');
});

scissorsButton.addEventListener('click', function (event) {
  playGame('scissors');
});

lizardButton.addEventListener('click', function (event) {
  playGame('lizard');
});

spockButton.addEventListener('click', function (event) {
  playGame('spock');
});

rulesButton.addEventListener('click', function (event) {
  rulesPopup.style.display = "flex";
})

closeButton.addEventListener('click', function (event) {
  rulesPopup.style.display = "none";
})

async function playGame(selection) {
  let choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  let houseChoice = '';

  selectionLayout.style.display = "none";
  gameLayout.style.display = "block";
  
  console.log(`user selected ${selection}, waiting 1 seconds for computer to pick`)
  document.querySelector(".user-icon").src=`./images/icon-${selection}.svg`;
  document.querySelectorAll(".user, ")
  element.classList.add("my-class")
  
  await new Promise(r => setTimeout(r, 1000));
  
  houseChoice = choices[Math.floor(Math.random() * 4)];
  console.log(`house selected ${houseChoice}, waiting 1 seconds and evaluate`)
  document.querySelector(".house-icon").src=`./images/icon-${houseChoice}.svg`;

  await new Promise(r => setTimeout(r, 1000));

  winner = evaluateChoices(selection, houseChoice);

  if (winner = 'user') {
    console.log(`${selection} beats ${houseChoice}. User wins!`)
    score = scoreOutput.innerHTML;
    score++;
    scoreOutput.innerHTML = score;
  } else {

    console.log(`${houseChoice} beats ${selection}. House wins!`)
  }

}

function evaluateChoices(user, house) {

  if (user === house) {
    return 'draw';
  }
  if(user === 'rock') {
    if (house === 'lizard' || house === 'scissors') {
      return 'user'
    } else {
      return 'house'
    }         
  } else if (user === 'paper') {
    if (house === 'rock' || house === 'spock') {
      return 'user'
    } else {
      return 'house'
    }
  } else if (user === 'scissors') {
    if (house === 'lizard' || house === 'paper') {
      return 'user'
    } else {
      return 'house'
    }
  } else if (user === 'lizard') {
    if (house === 'spock' || house === 'paper') {
      return 'user'
    } else {
      return 'house'
    }
  } else if (user === 'spock') {
    if (house === 'rock' || house === 'scissors') {
      return 'user'
    } else {
      return 'house'
    }
  }
}