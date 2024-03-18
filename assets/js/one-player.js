



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