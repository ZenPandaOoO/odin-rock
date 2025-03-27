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

//Initiates the round. Determines who gets a point
function playRound() {
    const humanSelection = playerChoice();
    console.log("Player: " + humanSelection);
    const computerSelection = getComputerChoice(); 
    console.log("Computer: " + computerSelection);
    console.log(checkWinner(humanSelection, computerSelection));
        console.log("-------------");
    if (checkWinner(humanSelection, computerSelection) == "Tie!"){
        return "No Point";
    }   else if (checkWinner(humanSelection, computerSelection) == "Win!") {
        return "Player Point!";
    }   else if (checkWinner(humanSelection, computerSelection) == "Lose!") {
        return "Computer Point!";
    }
}

//calls playRound and determines winner for the entire game.
function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    let roundOne = playRound();
    if (roundOne == "Player Point!") {
        ++playerScore;
    } else if (roundOne == "Computer Point!") {
        ++computerScore;
    }

    let roundTwo = playRound();
    if (roundTwo == "Player Point!") {
        ++playerScore;
    } else if (roundTwo == "Computer Point!") {
        ++computerScore;
    }

    let roundThree = playRound();
    if (roundThree == "Player Point!") {
        ++playerScore;
    } else if (roundThree == "Computer Point!") {
        ++computerScore;
    }

    let roundFour = playRound();
    if (roundFour == "Player Point!") {
        ++playerScore;
    } else if (roundFour == "Computer Point!") {
        ++computerScore;
    }

    let roundFive = playRound();
    if (roundFive == "Player Point!") {
        ++playerScore;
    } else if (roundFive == "Computer Point!") {
        ++computerScore;
    }

    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);

    if (playerScore > computerScore) {
        return "Congratulations!";
    } else if (computerScore > playerScore) {
        return "You lost! Try again!";
    } else {
        return "It's a draw!!!";
    }
}

console.log (playGame());
//function and variable tests
//console.log (computerSelection);
//console.log (playRound());
//console.log ("Player: " + playerScore);
//console.log ("Computer: " + computerScore);
