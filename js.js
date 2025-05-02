let ComputerChoice;
let HumanChoice;
let computerScore = 0;
let humanScore = 0;

function getComputerChoice () {
    ComputerChoice = Math.random();

    if (ComputerChoice <= 0.33) {
        console.log("Rock");
    } else if (ComputerChoice > 0.33 && ComputerChoice <= 0.66) {
        console.log("Paper");
    } else {
        console.log("Scissors");
    };
}

function getHumanChoice () {
    HumanChoice = prompt ("What is your choice?");
 }
 // getComputerChoice(); Test
 getHumanChoice();
//  console.log(HumanChoice); Test

function playRound (HumanChoice, ComputerChoice) {
    HumanChoice = HumanChoice.toLowerCase();
    // console.log(HumanChoice); //Test
    if (ComputerChoice === "Rock" && HumanChoice === "paper" || ComputerChoice === "Paper" && HumanChoice === "scissors" || ComputerChoice === "Scissors" && HumanChoice === "rock") {
    console.log(`You win! ${HumanChoice} beats ${ComputerChoice}!`);
    } else { 
        console.log(`You lose! ${ComputerChoice} beats ${HumanChoice}!`)
    }
}

playRound(HumanChoice, ComputerChoice); //Test