// Global variables
let playerOneChoice;

/**
 * Gets and displays Player 1 choice
 */
function getPlayerOneChoice() {
    let choices = document.getElementsByClassName('choice1');

    for (let choice of choices) {
        choice.addEventListener('click', () => {
            playerOneChoice = (choice.textContent).toLowerCase();
            document.getElementById('player1-choice').textContent = `Player 1 chose: ${playerOneChoice}`;
            console.log(playerOneChoice);
        })
    }
}

/**
 * Gets and displays Player 2 choice
 */
function getPlayerTwoChoice() {
    let choices = document.getElementsByClassName('choice2');

    for (let choice of choices) {
        choice.addEventListener('click', () => {
            playerTwoChoice = (choice.textContent).toLowerCase();
            document.getElementById('player2-choice').textContent = `Player 2 chose: ${playerTwoChoice}`;
            
        })
    }
}

/**
 * Checks for winner
 */
function checkWinner() {

    if (playerOneChoice === playerTwoChoice) {
        console.log("Tie!");
    } else {
        switch (playerOneChoice) {
            case 'rock':
                result = (playerTwoChoice === 'paper') ? "Player 2 wins" : "Player 1 wins";
                break;
            case 'paper':
                result = (playerTwoChoice === 'scissors') ? "Player 2 wins" : "Player 1 wins";
                break;
            case 'scissors':
                result = (playerTwoChoice === 'rock') ? "Player 2 wins" : "Player 1 wins";
                break;
        }
        if (result === "Player 1 wins") {
            outcome.style.color = 'green';
            incrementPlayer1Score();
        } else if (result === "Player 2 wins") {
            outcome.style.color = 'green';
            incrementPlayer2Score();
        } else {
            outcome.style.color = 'darkblue';
        }
    }
}