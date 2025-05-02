let computerScore = 0;
let humanScore = 0;

function getComputerChoice () {
    let ComputerChoice = Math.random(); //get random number between 0 and 1

// forming the random number into "Rock", "Paper" or Scissors:
    if (ComputerChoice <= 0.33) {    
        console.log("Rock");
    } else if (ComputerChoice > 0.33 && ComputerChoice <= 0.66) {
        console.log("Paper");
    } else {
        console.log("Scissors");
    };
}

function getHumanChoice () {
    let HumanChoice = prompt ("What is your choice?"); //prompt asking user for choice
    HumanChoice = HumanChoice.charAt(0).toUpperCase() + HumanChoice.slice(1).toLowerCase(); //capitalize first letter of HumanChoice and lowercase the rest
    return HumanChoice; // return result of the function
 }

function playRound (HumanChoice, ComputerChoice) { 
// logic for which choice wins over the other:
    if (ComputerChoice === "Rock" && HumanChoice === "paper" || ComputerChoice === "Paper" && HumanChoice === "scissors" || ComputerChoice === "Scissors" && HumanChoice === "rock") {
        console.log(`You win! ${HumanChoice} beats ${ComputerChoice}!`);
        humanScore += 1;
    } else { 
        console.log(`You lose! ${ComputerChoice} beats ${HumanChoice}!`);
        computerScore += 1;
    }
}


const humanSelection = getHumanChoice();  
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection); //uglier, but working alternative: playRound(getHumanChoice, getComputerChoice);
