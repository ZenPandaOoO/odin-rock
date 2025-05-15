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

let playerChoice

//buttons
const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => {
    let playerChoice = "Rock"
});

//prompt for player choice. Returns as first letter capitalized.




    
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
const playerScore = document.createElement("div");
playerScore.textContent = "0";
playerScore.setAttribute("style", "color: gold; border: solid 8px; margin-right: 12px; border-color: gold; font-size: 40px; padding: 24px; text-align: center;");
playerSection.appendChild(playerScore);

//create a new div class for hero choice

//css for the villain section
const computerSection = document.querySelector("#computerSection");
const computerContent = document.createElement("div")
computerContent.classList.add("computerContent");
computerContent.textContent = "VILLAIN";
computerContent.setAttribute("style", "color: purple; background-color: black; border: solid 8px; border-color: purple; font-size: 40px; padding: 20px; text-align: center;");
computerSection.appendChild(computerContent);

//create a new div class for villain score inside of div id villain section
const computerScore = document.createElement("div");
computerScore.textContent = "0";
computerScore.setAttribute("style", "color: purple; margin-right: 12px; background-color: black; border: solid 8px; border-color: purple; font-size: 40px; padding: 20px; text-align: center;");
computerSection.appendChild(computerScore);


//create a new div class for villain choice

//create a new div class for winner


//ODIN ASSIGNMENT//
//remove logic that plays 5 rounds
//create three buttons -- one for each selection
    //add event listener to the buttons that call playRound w/ the correct playerSelection when button is clicked
        //remember to console.log for this step
//add a div for displaying results and change all console.logs into DOM methods
//display the running score and announce a winner ONCE ONE PLAYER REACHES 5 POINTS



//FUNCTION AND VARIABLE TESTS//
//console.log (computerSelection);
//console.log (playRound());
//console.log ("Player: " + playerScore);
//console.log ("Computer: " + computerScore);
