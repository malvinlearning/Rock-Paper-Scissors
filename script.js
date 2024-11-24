let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

let divText = document.querySelector('div'); // Select the div for displaying results

function getComputerChoice() {
    const computerMove = Math.random();
    if (computerMove < 1 / 3) {
        return 'Rock';
    } else if (computerMove < 2 / 3) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

rockButton.addEventListener('click', () => {
    playRound('Rock', getComputerChoice());
});

paperButton.addEventListener('click', () => {
    playRound('Paper', getComputerChoice());
});

scissorsButton.addEventListener('click', () => {
    playRound('Scissors', getComputerChoice());
});

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'Rock' && computerChoice === 'Rock') {
        divText.innerText += "That's a draw\n";
    } else if (humanChoice === 'Rock' && computerChoice === 'Paper') {
        computerScore++;
        divText.innerText += "Computer wins. Paper beats Rock\n";
    } else if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
        humanScore++;
        divText.innerText += "You win. Rock beats Scissors\n";
    }

    if (humanChoice === 'Paper' && computerChoice === 'Paper') {
        divText.innerText += "That's a draw\n";
    } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
        humanScore++;
        divText.innerText += "You win. Paper beats Rock\n";
    } else if (humanChoice === 'Paper' && computerChoice === 'Scissors') {
        computerScore++;
        divText.innerText += "Computer wins. Scissors beats Paper\n";
    }

    if (humanChoice === 'Scissors' && computerChoice === 'Scissors') {
        divText.innerText += "That's a draw\n";
    } else if (humanChoice === 'Scissors' && computerChoice === 'Rock') {
        computerScore++;
        divText.innerText += "Computer wins. Rock beats Scissors\n";
    } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
        humanScore++;
        divText.innerText += "You win. Scissors beats Paper\n";
    }

    // Display the running score
    renderScores();

    // Check if someone has won the game
    checkWinner();
}

function renderScores() {
    divText.innerText += `Human score = ${humanScore}\nComputer score = ${computerScore}\n`;
}

function checkWinner() {
    if (humanScore === 5) {
        divText.innerText += "Congratulations! You win the game!\n";
        disableButtons();
    } else if (computerScore === 5) {
        divText.innerText += "Computer wins the game! Better luck next time.\n";
        disableButtons();
    }
}

function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    divText.innerText += "Game Over! Reload the page to play again.\n";
}
