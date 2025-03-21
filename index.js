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
    const Tie = "Its a tie. Great minds think alike.";
    const roundWin = "You win!";
    const roundLose = "You lose.";

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
//function playerScore() {
  //  const playerPoint = 0
    //if (checkWinner(humanSelection, computerSelection) === roundWin) {
      //  return playerPoint + 1;
    //}
//}
//function computerScore() {
  //  const computerPoint = 0
    //if (checkWinner(humanSelection, computerSelection) === roundLose) {
      //  return computerPoint + 1;
    //}
//}

let playerPoint = 0; //This may need to be turned into a function
let computerPoint = 0;

function playRound() { //returning undefined
    if (checkWinner(humanSelection, computerSelection) === "roundWin") {
        return playerPoint + 1;
    }
    else if (checkWinner(humanSelection, computerSelection) === "roundLose") {
        return computerPoint + 1;
    }
}


    //if winner = roundWin player gets +1
    //else if winner = roundLose computer gets +1
    //else nobody gets a point

const humanSelection = playerChoice();
const computerSelection = getComputerChoice();

console.log(computerSelection);
console.log(playerPoint);
console.log(computerPoint);
console.log (playRound());

//create new functions called playGame

//Create a function named checkWinner
   