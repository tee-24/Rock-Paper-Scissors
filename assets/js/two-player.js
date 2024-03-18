// Global variables
let playerOneChoice;
let playerTwoChoice;
let result;
let outcome = document.getElementById('result');

// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", () => {
    getPlayerOneChoice();
    getPlayerTwoChoice();

    // Add event listener to play again button
    let reset = document.getElementById('reset');
    reset.addEventListener('click', () => {
        toggle();

    // Clear results display 
    let clearDisplay = document.getElementsByClassName('display-box')[0];
    clearDisplay.innerHTML = `<p id="player1-choice"></p>
    <p id="player2-choice"></p>
    <p id="result"></p>`
    });
});

/**
 * Gets and displays Player 1 choice
 */
function getPlayerOneChoice() {
    let choices = document.getElementsByClassName('choice1');

    for (let choice of choices) {
        choice.addEventListener('click', () => {
            playerOneChoice = (choice.textContent).toLowerCase();
            document.getElementById('player1-choice').textContent = `Player 1 chose: ${playerOneChoice}`;
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

/**
 * Checks for winner
 */
function checkWinner() {

    if (playerOneChoice === playerTwoChoice) {
        result = "It's a Tie!";
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

/**
 * Displays game results
 */
function displayResult() {
    console.log(result)
    outcome.textContent = `${result}`;
    toggle();
}

/**
 * Disables game buttons after Player 2 plays
 */
function toggle() {
    let choices1 = document.getElementsByClassName('choice1');
    let choices2 = document.getElementsByClassName('choice2');

    for (let choice1 of choices1) {
        if (choice1.disabled === true) {
            choice1.disabled = false;
        } else {
            choice1.disabled = true;
        }
    }
    for (let choice2 of choices2) {
        if (choice2.disabled === true) {
            choice2.disabled = false;
        } else {
            choice2.disabled = true;
        }
    }
}

/** 
 * Gets player 1 score from the DOM and increments it by 1 
 */
function incrementPlayer1Score() {
    let player1Score = parseInt(document.getElementById('player1-score').innerText);
    document.getElementById('player1-score').innerText = ++player1Score;
}

/** 
 * Gets player 2 score from the DOM and increments it by 1 
 */
function incrementPlayer2Score() {
    let player2Score = parseInt(document.getElementById('player2-score').innerText);
    document.getElementById('player2-score').innerText = ++player2Score;
}