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

function playerChoice() {
    let options = prompt("TYPE ROCK PAPER OR SCISSORS!");
    let playerChoiceLower = options.toLowerCase();
    return playerChoiceLower.charAt(0).toUpperCase(1) + playerChoiceLower.slice(1);
}

function checkWinner(ChoiceP, ChoiceC) {
  
    let Tie = "Its a tie. Great minds think alike.";
    let roundWin = `You win! ${humanSelection} beats ${computerSelection}`;
    let roundLose = `You lose. ${computerSelection} beats ${humanSelection}`;

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
    let playerScore = 0
    let computerScore = 0

function playRound() {
    let winner = checkWinner(humanSelection, computerSelection);
    let Tie = "Its a tie. Great minds think alike.";
    let roundWin = `You win! ${humanSelection} beats ${computerSelection}`;
    let roundLose = `You lose. ${computerSelection} beats ${humanSelection}`;

    if (winner = roundWin) {
        playerScore++;
    } else if (winner = roundLose) {
        computerScore++;
    } else {
    return Tie;
    }
}

const humanSelection = playerChoice();
const computerSelection = getComputerChoice();

console.log(computerSelection);
console.log (checkWinner(humanSelection, computerSelection));
console.log (playRound());
console.log (playerScore);
console.log (computerScore);

//create new functions called playGame

//Create a function named checkWinner
   