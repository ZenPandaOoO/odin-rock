//gets computers choice
function getComputerChoice() {
    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";
    let getRandomValue = Math.random();


    if (getRandomValue <= 0.33) {
        return rock;
    } else if (getRandomValue <= 0.66) {
        return paper;
    } else {
        return scissors;
        }

}

//compares player choice and computer choice. Determines the winner.
function checkWinner(ChoiceP, ChoiceC) {
    let Tie = "Tie!";
    let roundWin = "Win!";
    let roundLose = "Lose!";

        if (ChoiceP === ChoiceC) {
        return Tie;
    } else if ((ChoiceP == "Rock") && (ChoiceC == "Scissors")) {
        return roundWin;  
    } else if ((ChoiceP == "Paper") && (ChoiceC == "Rock")) {
        return roundWin;
    } else if ((ChoiceP == "Scissors") && (ChoiceC == "Paper")) {
        return roundWin;
    } else {
        return roundLose;
}
}

//create a checkLoser function
//buttons
    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");

    const buttonStart = document.querySelector("#playerSelections");
    buttonStart.addEventListener("click", playRound);

let playerChoice = "";
rockButton.addEventListener("click", () => {
    playerChoice = "Rock";
});
paperButton.addEventListener("click", () => {
    playerChoice = "Paper";
});
scissorsButton.addEventListener("click", () => {
    playerChoice = "Scissors";
});

//plays a round and determinds who gets a point
let playerScoreValue = 0;
let computerScoreValue = 0;

function playRound() {
    const humanSelection = playerChoice;
    const computerSelection = getComputerChoice(); 

    if (checkWinner(humanSelection, computerSelection) == "Win!"){
        playerScoreValue++;
    } else if (checkWinner(humanSelection, computerSelection) == "Lose!") {
        computerScoreValue++;
    }

    computerChoiceDisplay(computerSelection);
    playerChoiceDisplay(humanSelection);
    playGame();

    playerScoreDisplay.textContent = playerScoreValue;
    computerScoreDisplay.textContent = computerScoreValue;

}

//css for the Hero choice
const playerRock = document.createElement("div");
const playerPaper = document.createElement("div");
const playerScissors = document.createElement("div");
function playerChoiceDisplay(choice) {
    if (choice === "Rock") {
        playerContent.textContent = "Rock";
    } else if (choice === "Paper") {
        playerContent.textContent = "Paper";
    } else if (choice === "Scissors") {
        playerContent.textContent = "Scissors";
    }
}
//css for the villain choice
const computerRock = document.createElement("div");
const computerPaper = document.createElement("div");
const computerScissors = document.createElement("div");
function computerChoiceDisplay(choice) {
    if (choice === "Rock") {
        computerContent.textContent = "Rock";
    } else if (choice === "Scissors") {
        computerContent.textContent = "Scissors";
    } else if (choice === "Paper") {
        computerContent.textContent = "Paper";
    }
}

//calls playRound and determines winner for the entire game.
function playGame() {
    
    if (computerScoreValue >= 5 || playerScoreValue >= 5) {
        rockButton.remove();
        paperButton.remove();
        scissorsButton.remove();
        playerSelections.appendChild(playAgain);
         if (playerScoreValue > computerScoreValue) {
            playerContent.textContent = "The Hero prevailed!";
            computerContent.textContent = "Defeated";
        } else if (computerScoreValue > playerScoreValue) {
           playerContent.textContent = "Defeated"
           computerContent.textContent = "The Villain has triumphed!";
        }
    }       
    }

//css for the header
const header = document.querySelector("#head");
const headContent = document.createElement("div");
headContent.classList.add("headContent");
headContent.textContent = "War in Heaven";
headContent.setAttribute("style", "color: GreenYellow; background: black; text-align: center; font-weight: bold; font-size: 50px; padding: 24px; margin-top: 40px;");
header.appendChild(headContent);

//css for the hero section
const playerSection = document.querySelector("#playerSection");
const playerContent = document.createElement("div");
playerContent.classList.add("playerContent");
playerContent.textContent = "HERO";
playerContent.setAttribute("style", "color: gold; border: solid 8px; border-color: gold; font-size: 40px; padding: 24px; text-align: center;");
playerSection.appendChild(playerContent);

//create a new div class for hero score inside of div id playerSection
const playerScoreDisplay = document.createElement("div");
playerScoreDisplay.textContent = "0";
playerScoreDisplay.setAttribute("style", "color: gold; border: solid 8px; margin-right: 12px; border-color: gold; font-size: 40px; padding: 24px; text-align: center;");
playerSection.appendChild(playerScoreDisplay);

//create a function that adds a playAgain button and resets game
    const playerSelections = document.querySelector("#playerSelections");
    const playAgain = document.createElement("button"); 
    playAgain.setAttribute("style", "border-radius: 10px; font-size: 24px; font-weight: bold; margin: 12px; margin-left: 100px; margin-right: 100px; background-color: white;")
    playAgain.textContent = "Play Again?";
    playAgain.addEventListener("click", resetGame);

function resetGame() {
    if (computerScoreValue >= 5 || playerScoreValue >= 5) {
  
    playerScoreValue = 0;
    computerScoreValue = 0;
    computerScoreDisplay.textContent = "0";
    playerScoreDisplay.textContent = "0";

    playerContent.textContent = "HERO";
    computerContent.textContent = "VILLAIN";

    if (!document.querySelector("#rock")) {
        playerSelections.appendChild(rockButton);
    }
    if (!document.querySelector("#paper")) {
        playerSelections.appendChild(paperButton);
    }
    if (!document.querySelector("#scissors")) {
        playerSelections.appendChild(scissorsButton);
    }

    playAgain.remove();
}
}
//css for the villain section
const computerSection = document.querySelector("#computerSection");
const computerContent = document.createElement("div")
computerContent.classList.add("computerContent");
computerContent.textContent = "VILLAIN";
computerContent.setAttribute("style", "color: purple; background-color: black; border: solid 8px; border-color: purple; font-size: 40px; padding: 20px; text-align: center;");
computerSection.appendChild(computerContent);


//create a new div class for villain score inside of div id villain section
const computerScoreDisplay = document.createElement("div");
computerScoreDisplay.textContent = "0";
computerScoreDisplay.setAttribute("style", "color: purple; margin-right: 12px; background-color: black; border: solid 8px; border-color: purple; font-size: 40px; padding: 20px; text-align: center;");
computerSection.appendChild(computerScoreDisplay);


//TO DO
//Debug the computer choice display
//Move playAgain outside of playerSelections (to avoid it calling playRound)



