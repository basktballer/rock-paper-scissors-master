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
const selectionLayout = document.querySelector(".selection-layout");
const gameLayout = document.querySelector(".game-layout");
const userDiv = document.querySelector(".user");
const houseDiv = document.querySelector(".house");
const userIcon = document.querySelector(".user-icon");
const houseIcon = document.querySelector(".house-icon");
const victoryText = document.querySelector(".victory");
const defeatText = document.querySelector(".defeat");
const drawText = document.querySelector(".draw");
const playAgainButton = document.querySelector(".play-again");
const resultsPanel = document.querySelector(".results-panel");

const scoreOutput = document.getElementById("score-output");
let score = 0;
let winner = "";
let choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let houseChoice = '';
let userChoice = '';

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

playAgainButton.addEventListener('click', function (event) {
  resetElements();
})

async function playGame(selection) {

  selectionLayout.style.display = "none";
  gameLayout.style.display = "block";
  userChoice = selection;

  console.log(`user selected ${selection}, waiting 1 seconds for computer to pick`)
  userIcon.src=`./images/icon-${selection}.svg`;
  userDiv.classList.add(`${selection}-div`)
  
  await new Promise(r => setTimeout(r, 1000));
  
  houseChoice = choices[Math.floor(Math.random() * 4)];
  console.log(`house selected ${houseChoice}, waiting 1 seconds and evaluate`)
  houseIcon.src=`./images/icon-${houseChoice}.svg`;
  houseIcon.style.display = "block";
  houseDiv.classList.add(`${houseChoice}-div`)

  await new Promise(r => setTimeout(r, 1000));

  winner = evaluateChoices(selection, houseChoice);
  resultsPanel.style.display = "flex";

  if (winner === 'user') {
    victoryText.style.display = "block";
    userDiv.classList.add('winner-box-shadow');
    userDiv.parentElement.classList.add('winner-fade-back');
    console.log(`${selection} beats ${houseChoice}. User wins!`)
    score = scoreOutput.innerHTML;
    score++;
    scoreOutput.innerHTML = score;
  } else if (winner === 'house'){
    defeatText.style.display = "block";
    houseDiv.classList.add('winner-box-shadow');
    houseDiv.parentElement.classList.add('winner-fade-back');
    console.log(`${houseChoice} beats ${selection}. House wins!`)
  } else {
    drawText.style.display = "block";
    console.log(`Draw!`)
  }

  playAgainButton.style.display = "block";

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

function resetElements() {
  playAgainButton.style.display = "none";
  victoryText.style.display = "none"
  drawText.style.display = "none"
  defeatText.style.display = "none"
  gameLayout.style.display = "none";
  selectionLayout.style.display = "grid";
  houseIcon.src="";
  houseIcon.style.display = "none";
  houseDiv.classList.remove(`${houseChoice}-div`, 'winner-box-shadow');
  userIcon.src="";
  userDiv.classList.remove(`${userChoice}-div`, 'winner-box-shadow');
  userDiv.parentElement.classList.remove('winner-fade-back');
  houseDiv.parentElement.classList.remove('winner-fade-back');

}
