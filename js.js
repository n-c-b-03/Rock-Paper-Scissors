let ComputerChoice;
let HumanChoice;

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

getComputerChoice(); //delete

function getHumanChoice () {
    HumanChoice = prompt ("What is your choice?");
 }
 getHumanChoice(); //delete
 console.log(HumanChoice);