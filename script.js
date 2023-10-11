const choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];  
}

const playerSelection = "Rock";

const computerSelection = getComputerChoice();

function playGame(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Tie")
    } else if (computerSelection === "Paper") {
        console.log("Computer WINS")
    }
    else {
        console.log("Player WINS")
    }
}
