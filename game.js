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

let selection = document.querySelector(".selection");
let results = document.querySelector(".results");

function playRound(humanChoice, computerChoice) {
    selection.textContent = `You selected ${humanChoice.toUpperCase()}, The computer selected ${computerChoice.toUpperCase()}`;
    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            results.textContent = "No one wins!";
        }
        else if (computerChoice == "paper") {
            results.textContent = "Paper beats Rock: \nYou Lose!";
            computerScore += 1;   
        }
        else if (computerChoice == "scissors") {
            results.textContent = "Rock beats Scissors: \nYou Win!";
            humanScore += 1;
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            results.textContent = "Paper beats Rock: \nYou Win!";
            humanScore += 1;
        }
        else if (computerChoice == "paper") {
            results.textContent = "No one wins!";  
        }
        else if (computerChoice == "scissors") {
            results.textContent = "Scissors beat Paper: \nYou Lose!";
            computerScore += 1;
        }
    }
    else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            results.textContent = "Rock beats Scissors: \nYou Lose!";
            computerScore += 1;
        }
        else if (computerChoice == "paper") {
            results.textContent = "Scissors beat Paper: \nYou Win!";
            humanScore += 1;
        }
        else if (computerChoice == "scissors") {
            results.textContent = "No one wins!";
        }
    }
    else {
        results.textContent = "Invalid input: \nYou Lose!";
        computerScore += 1;        
    }
}

let buttons = document.querySelectorAll("button");
let endOfGame = document.querySelector(".endOfGame");
let scores = document.querySelector(".scores");

buttons.forEach((button) => {
    button.addEventListener("click", (event) =>{
        let humanChoice = event.target.textContent.toLowerCase();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);

        scores.innerHTML = `
        Human Score: ${humanScore}
        Computer Score: ${computerScore}`;

        if (humanScore == 5 || computerScore == 5) {
            let winner;
            if (humanScore == 5) {
                winner = "Human";
            } else {
                winner = "Computer";
            }
            endOfGame.innerHTML = 
            `END OF THE GAME 
            <p>${winner} wins!</p>`;

            let buttonsDiv = document.querySelector(".buttons");
            buttonsDiv.style.display = "none";

            let playAgain = document.createElement("button");
            playAgain.textContent = "Play Again!";
            playAgain.addEventListener("click", () => {
                endOfGame.textContent = "";
                scores.textContent = "";
                selection.textContent = "";
                results.textContent = "";
                humanScore = 0;
                computerScore = 0;
                buttonsDiv.style.display = "block";
            })
            endOfGame.appendChild(playAgain);
        }
    })
})

