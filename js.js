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

function getHumanChoice () {

    let HumanChoice = prompt ("What is your choice?"); //prompt asking user for choice
    HumanChoice = HumanChoice.trim();
    HumanChoice = HumanChoice.charAt(0).toUpperCase() + HumanChoice.slice(1).toLowerCase(); //capitalize first letter of HumanChoice and lowercase the rest

    if (HumanChoice === "Rock" || HumanChoice === "Paper" || HumanChoice === "Scissors") {
        return HumanChoice; // return result of the function
    } else { 
        alert("Invalid Choice! Please choose between 'Rock', 'Paper' and 'Scissors'.");
        return getHumanChoice();
    }

 }

 function playGame () {
    let computerScore = 0;
    let humanScore = 0;

    /**
     logic for which choice wins over the other:
        */
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

    /**
     playing 5 rounds, including calling the getHumanChoice and getComputerChoice function 5 times!
     */
    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();  
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    /**
     alerting the final result after the 5 rounds
     */
    if (computerScore > humanScore) {
        alert(`Sorry, you lose! ${computerScore} is higher than ${humanScore}.`);
    } else if (humanScore > computerScore)  {
        alert(`You won! ${humanScore} is higher than ${computerScore}.`);
    } else {
        alert(`It's a draw!`);
    }
}

playGame();