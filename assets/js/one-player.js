



/**
 * Gets and displays the user's choice
 */
function getUserChoice() {

    for (let choice of choices) {
        choice.addEventListener('click', () => {
            userChoice = (choice.textContent).toLowerCase();
            console.log(userChoice);
            document.getElementById('user-choice').textContent = `You chose: ${userChoice}`;
           
        })
    }
}
/**
 * Gets and displays the computer's choice
 */
function displayComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];

    computerChoice = options[Math.floor(Math.random() * 3)];
    console.log(computerChoice);

    let display = document.getElementById('computer-choice');
    display.textContent = `Computer chose: ${computerChoice}`;
}
/**
 * Checks for winner
 * and displays game results
 */
function checkWinner() {

    if (userChoice === computerChoice) {
        result = "It's a Tie!";
    } else {
        switch (userChoice) {
            case 'rock':
                result = (computerChoice === 'paper') ? "You lost!" : "You win!";
                break;
            case 'paper':
                result = (computerChoice === 'scissors') ? "You lost!" : "You win!";
                break;
            case 'scissors':
                result = (computerChoice === 'rock') ? "You lost!" : "You win!";
        }
    }
    if (result === "You win!") {
        outcome.style.color = 'green'
        incrementUserScore();
    } else if (result === "You lost!") {
        incrementComputerScore();
        outcome.style.color = 'red'
    } else {
        outcome.style.color = 'white'
    }
}