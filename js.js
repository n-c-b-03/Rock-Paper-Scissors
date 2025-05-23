const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const scoreDisplay = document.querySelector("#scoreDisplay");
const roundResult = document.querySelector("#roundResult");
const finalResult = document.querySelector("#finalResult");



function getComputerChoice () {
    let ComputerChoice = Math.random(); //get random number between 0 and 1

// forming the random number into "Rock", "Paper" or Scissors:
    if (ComputerChoice <= 0.33) {    
        return "Rock";
    } else if (ComputerChoice > 0.33 && ComputerChoice <= 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    };
}


let computerScore = 0;
let humanScore = 0;
let numRounds = 0;

function playGame(humanSelection) {
    if (numRounds >= 5) {
        alert("You already played 5 rounds! Reload to play again");
        return;
    }
    const computerSelection = getComputerChoice();
    
    if (computerSelection === "Rock" && humanSelection === "Paper" || computerSelection === "Paper" && humanSelection === "Scissors" || computerSelection === "Scissors" && humanSelection === "Rock") {
        roundResult.textContent = `You win! ${humanSelection} beats ${computerSelection}!`;
        humanScore += 1;
    } else if (computerSelection === "Rock" && humanSelection === "Rock" || computerSelection === "Paper" && humanSelection === "Paper" || computerSelection === "Scissors" && humanSelection === "Scissors") {
        roundResult.textContent = `Draw between ${computerSelection} and ${humanSelection}!`;
    } else { 
        roundResult.textContent = `You lose! ${computerSelection} beats ${humanSelection}!`;
        computerScore += 1;
    }

    scoreDisplay.textContent = `Computer score: ${computerScore}  Human score: ${humanScore}`; //Show both the scores 
    
    numRounds ++;

    if (numRounds === 5) {
        if (computerScore > humanScore) {
            finalResult.textContent = `Sorry, you lose! ${computerScore} is higher than ${humanScore}.`;
        } else if (humanScore > computerScore)  {
            finalResult.textContent = `You won! ${humanScore} is higher than ${computerScore}.`;
        } else {
            finalResult.textContent = `It's a draw!`;
        }
    }
}
