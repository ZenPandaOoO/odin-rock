    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";

function getComputerChoice() {

    let getRandomValue = Math.random();

    if (getRandomValue <= 0.33) {
        return rock;
    } else if (getRandomValue <= 0.66) {
        return paper;
    } else {
        return scissors;
        }

}
console.log(getComputerChoice());

//Create a function named getComputerChoice
        //if value is less or equal to .33 then rock
        //if value is less then or equal to .66 then paper
        //else then scissors

function getHumanChoice() {
    let humanChoice = prompt("ROCK PAPER SCISSORS");
    if (humanChoice.toLowerCase() === "rock") {
        return rock;
    } else if (humanChoice.toLowerCase() === "paper") {
        return paper;
    } else if (humanChoice.toLowerCase() === "scissors") {
        return scissors;
    } else {
        return "Not an option.";
        }
}
console.log (getHumanChoice());



function playRound(getHumanChoice, getComputerChoice) {

    let Tie = "Its a tie. Great minds think alike.";
    let roundWin = `You win! ${getHumanChoice} beats ${getComputerChoice}`;
    let roundLose = `You lose. ${getComputerChoice} beats ${getHumanChoice}`;
    
    if (getHumanChoice = getComputerChoice) {
        return Tie;
    } else if ((getHumanChoice == "Rock") && (getComputerChoice == "Scissors")) {
        return roundWin;  
    } else if ((getHumanChoice == "Paper") && (getComputerChoice == "Rock")) {
        return roundWin;
    } else if ((getHumanChoice == "Scissors") && (getComputerChoice == "Paper")) {
        return roundWin;
    } else {
        return roundLose;
    }
}

console.log (playRound(getHumanChoice, getComputerChoice));




//Create a function named checkWinner
    //if getHumanChoice = getComputerChoice return tie
    // else if HumanChoice is rock and computerChoice is scissors return win
    // else if HumanChoice is paper and computerChoice is rock return win
    // else if HumanChoice is scissors and computerChoice is paper return win
    // else return lose