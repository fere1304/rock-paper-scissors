const choices = ["Rock", "Paper", "Scissors"];

const computerSelection = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

const playerSelection = "Rock";

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("Tie");
  } else if (computerSelection === "Paper") {
    console.log("Computer WINS");
  } else {
    console.log("Player WINS");
  }
}

function game() {
  for (i = 1; i <= 5; i++) {
    playRound(playerSelection, computerSelection);
  }
}
game();
