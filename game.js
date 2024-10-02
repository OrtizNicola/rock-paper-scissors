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

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log(`You selected ${humanChoice} and the computer selected ${computerChoice}`);
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

let buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
    button.addEventListener("click", (event) =>{
        let humanChoice = event.target.textContent.toLowerCase();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    })
})
