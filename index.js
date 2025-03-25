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

//prompt for player choice. Returns as first letter capitalized.
function playerChoice() {
    let options = prompt("TYPE ROCK PAPER OR SCISSORS!");
    let playerChoiceLower = options.toLowerCase();
    return playerChoiceLower.charAt(0).toUpperCase(1) + playerChoiceLower.slice(1);
}

//compares player choice and computer choice. Determines the winner.
function playRound(ChoiceP, ChoiceC) {
    let Tie = "Tie!";
    let roundWin = "Win!";
    let roundLose = "Lose!";

        if (ChoiceP === computerSelection) {
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

//gets information from playRound. Determines who gets a point
function scoreBoard() {
    let Tie = "No Point.";
    let playerWin = "Player point!";
    let computerWin = "Computer point";
    let winner = playRound(humanSelection, computerSelection);

    if (winner == "Win!") {
        return playerWin;
    } else if (winner == "Lose!") {
        return computerWin;
    } else {
    return Tie;
    }    

}

const humanSelection = playerChoice();
const computerSelection = getComputerChoice();

//adds a point to the players score
function playerRound() {
    let playerAddPoint = 0;
    let playerCheck = scoreBoard();
    if (playerCheck == "Player point!") {
        return playerAddPoint + 1; 
    }   else {
        return playerAddPoint;
    }
}
let playerScore = ("Player: " + (0 + playerRound()));

//adds a point to the computers score
function computerRound() {
    let computerAddPoint = 0;
    let computerCheck = scoreBoard();
    if (computerCheck == "Computer point") {
        return computerAddPoint + 1;
    }   else {
        return computerAddPoint;
    }
}
let computerScore = ("Computer: " + (0 + computerRound()));

//determines if any of the players reached max points. Repeats if goal is not met.
function playGame() {
    let computerPoint = computerRound();
    let playerPoint = playerRound();
    if (computerPoint == 5) {
        return "You lost!"
    } else if (playerPoint == 5) {
        return "You win!"
    } else {
        return ("Let go another round!", playerChoice(), getComputerChoice());
    }
}

console.log (computerSelection);
console.log (playRound(humanSelection, computerSelection));
console.log (playGame());
console.log (scoreBoard());
console.log (playerScore);
console.log (computerScore);


//Look into arithmatic in a function

//create new functions called playGame

//Create a function named checkWinner
   