let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const computerMove = Math.random();
    if (computerMove < 1/3){
        return 'Rock';
    } else if (computerMove < 2/3){
        return 'Paper';
    } else if (computerMove > 2/3){
        return 'Scissors';
    }
}

function getHumanChoice() {
    return prompt("What's your move?");
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'Rock' && computerChoice == 'Rock') {
        console.log("That's a draw");
    } else if (humanChoice === 'Rock' && computerChoice == 'Paper') {
        computerScore++;
        console.log("Computer wins. Paper beat's Rock");
    } else if (humanChoice === 'Rock' && computerChoice == 'Scissors') {
        humanScore++;
        console.log("You win. Rock beats Scissors");
    }

    if (humanChoice === 'Paper' && computerChoice == 'Paper') {
        console.log("That's a draw");
    } else if (humanChoice === 'Paper' && computerChoice == 'Rock') {
        console.log("You win. Paper beat's Rock");
        humanScore++;
    } else if (humanChoice === 'Paper' && computerChoice == 'Scissors') {
        console.log("Computer wins. Scissors beats Paper");
        computerScore++;
    }

    if (humanChoice === 'Scissors' && computerChoice == 'Scissors') {
        console.log("That's a draw");
    } else if (humanChoice === 'Scissors' && computerChoice == 'Rock') {
        computerScore++;
        console.log("Computer wins. Rock beats Scissors");
    } else if (humanChoice === 'Scissors' && computerChoice == 'Paper') {
        humanScore++;
        console.log("You win. Scissors beat's Paper");
    }
}






function playGame() {
    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

playGame();
console.log(humanScore);
console.log(computerScore);
