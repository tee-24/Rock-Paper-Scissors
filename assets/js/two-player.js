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
            checkWinner();
            displayResult();
        })
    }
}