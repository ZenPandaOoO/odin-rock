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

function playRound() {
    const playerSelection = playerChoice();
    const computerResult = getComputerChoice();
    const winner = checkWinner(humanSelection, computerSelection);
    //if winner = roundWin player gets +1
    //else if winner = roundLose computer gets +1
    //else nobody gets a point
}

const humanSelection = playerChoice();
const computerSelection = getComputerChoice();

console.log(computerSelection);

console.log (checkWinner(humanSelection, computerSelection));

//create new functions called playGame

//Create a function named checkWinner
   