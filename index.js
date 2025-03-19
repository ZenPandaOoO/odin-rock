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

    let options = prompt("ROCK PAPER SCISSORS");
    const humanChoiceLower = options.toLowerCase();

function getHumanChoice() {
    if (humanChoiceLower === "rock") {
        return rock;
    } else if (humanChoiceLower === "paper") {
        return paper;
    } else if (humanChoiceLower === "scissors") {
        return scissors;
    } else {
        return "Not an option.";
        }
}

    console.log (getHumanChoice());

function playRound(humanChoice, computerChoice) {

    let Tie = "Its a tie. Great minds think alike.";
    let roundWin = `You win! ${getHumanChoice()} beats ${getComputerChoice()}`;
    let roundLose = `You lose. ${getComputerChoice()} beats ${getHumanChoice()}`;
    
    if (humanSelection == humanSelection) {
        return Tie;
    } else if ((humanSelection = "rock") && (getComputerChoice() = "scissors")) {
        return roundWin;  
    } else if ((humanSelection = "paper") && (getComputerChoice() = "rock")) {
        return roundWin;
    } else if ((humanSelection = "scissors") && (getComputerChoice() = "paper")) {
        return roundWin;
    } else {
        return roundLose;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log (playRound(humanSelection, computerSelection));




//Create a function named checkWinner
    //if getHumanChoice = getComputerChoice return tie
    // else if HumanChoice is rock and computerChoice is scissors return win
    // else if HumanChoice is paper and computerChoice is rock return win
    // else if HumanChoice is scissors and computerChoice is paper return win
    // else return lose