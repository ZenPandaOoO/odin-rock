function getComputerChoice() {
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
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

//Create a function named getHumanChoice
    //Use prompt method to get user's input