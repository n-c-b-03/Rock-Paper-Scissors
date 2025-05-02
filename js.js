let computerScore = 0;
let humanScore = 0;

function getComputerChoice () {
    let ComputerChoice = Math.random();

    if (ComputerChoice <= 0.33) {
        console.log("Rock");
    } else if (ComputerChoice > 0.33 && ComputerChoice <= 0.66) {
        console.log("Paper");
    } else {
        console.log("Scissors");
    };
}

function getHumanChoice () {
    let HumanChoice = prompt ("What is your choice?");
    return HumanChoice.toLowerCase();
 }

function playRound (HumanChoice, ComputerChoice) {
    

    if (ComputerChoice === "Rock" && HumanChoice === "paper" || ComputerChoice === "Paper" && HumanChoice === "scissors" || ComputerChoice === "Scissors" && HumanChoice === "rock") {
    console.log(`You win! ${HumanChoice} beats ${ComputerChoice}!`);
    } else { 
        console.log(`You lose! ${ComputerChoice} beats ${HumanChoice}!`)
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection); //Test