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

// rock.addEventListener("click", () => playGame("Rock"));
// paper.addEventListener("click", () => playGame("Paper"));
// scissors.addEventListener("click", () => playGame("Scissors"));


let computerScore = 0;
let humanScore = 0;
let numRounds = 0;

function playGame(humanSelection) {
    if (numRounds >= 5) {
        alert("You already played 5 rounds! Reload to play again");
        return;
    }
    const computerSelection = getComputerChoice();
    console.log(computerSelection);

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

/*
 function playGame () {
    let computerScore = 0;
    let humanScore = 0;

    
     logic for which choice wins over the other:
      
    function playRound (HumanChoice, ComputerChoice) { 
        if (ComputerChoice === "Rock" && HumanChoice === "Paper" || ComputerChoice === "Paper" && HumanChoice === "Scissors" || ComputerChoice === "Scissors" && HumanChoice === "Rock") {
            console.log(`You win! ${HumanChoice} beats ${ComputerChoice}!`);
            humanScore += 1;
        } else if (ComputerChoice === "Rock" && HumanChoice === "Rock" || ComputerChoice === "Paper" && HumanChoice === "Paper" || ComputerChoice === "Scissors" && HumanChoice === "Scissors") {
            console.log(`Draw between ${ComputerChoice} and ${HumanChoice}!`) 
        } else { 
            console.log(`You lose! ${ComputerChoice} beats ${HumanChoice}!`);
            computerScore += 1;
        }
        console.log("Computer score: " + computerScore + "\n"+ "Human score: " + humanScore);  //Show both the scores 
    }


     playing 5 rounds, including calling the getHumanChoice and getComputerChoice function 5 times!
     
    for (i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

  
     alerting the final result after the 5 rounds
   
    if (computerScore > humanScore) {
        alert(`Sorry, you lose! ${computerScore} is higher than ${humanScore}.`);
    } else if (humanScore > computerScore)  {
        alert(`You won! ${humanScore} is higher than ${computerScore}.`);
    } else {
        alert(`It's a draw!`);
    }
}
*/