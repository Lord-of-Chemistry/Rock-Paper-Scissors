const choices = ["rock", "paper", "scissors"];
let resultText = document.getElementById("resultText");
let scoreText = document.getElementById("scoreText");
let tieScore = document.getElementById('tieScore')
let playerScore = 0;
let computerScore = 0;
let tie = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const result = getResult(playerChoice, computerChoice);
  resultText.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;

  if (result === "You win!") {
    playerScore++;
  } else if (result === "You lose!") {
    computerScore++;
  } else {
    tie++
  }

  scoreText.textContent = `Score: Player ${playerScore} - ${computerScore} Computer`;
  tieScore.textContent = `Tie: ${tie}`
}

function getResult(player, computer) {
  if (player === computer) {
    return "It's a tie!";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}
