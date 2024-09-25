let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    let p = Math.random();
    if (p < 1/3) {
        return "rock"
    }
    else if (p < 2/3) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function getHumanChoice() {
    let move = prompt("Your move: Rock, Paper or Scissors");
    move = move.toLowerCase();
    if (["rock", "paper", "scissors"].includes(move))
        return move
    else
        return "Invalid move"
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            console.log("No one wins!");
        }
        else if (computerChoice == "paper") {
            console.log("Paper beats Rock: You Lose!");
            computerScore += 1;   
        }
        else if (computerChoice == "scissors") {
            console.log("Rock beats Scissors: You Win!");
            humanScore += 1;
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("Paper beats Rock: You Win!");
            humanScore += 1;
        }
        else if (computerChoice == "paper") {
            console.log("No one wins!");  
        }
        else if (computerChoice == "scissors") {
            console.log("Scissors beat Paper: You Lose!");
            computerScore += 1;
        }
    }
    else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log("Rock beats Scissors: You Lose!");
            computerScore += 1;
        }
        else if (computerChoice == "paper") {
            console.log("Scissors beat Paper: You Win!");
            humanScore += 1;
        }
        else if (computerChoice == "scissors") {
            console.log("No one wins!");
        }
    }
    else {
        console.log("Invalid input: You Lose!");
        computerScore += 1;        
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
