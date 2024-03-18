// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", () => {

    // Get the button elements and add event listeners to them
    document.getElementById('start-game').addEventListener('click', () => {

        let options = document.querySelector('.game-area');
        let playerOptions = `<a href="game.html"><button class="btn">1 Player</button></a><br>
        <a href="twoplayer.html"><button class="btn">2 Players</button></a>`;

        options.innerHTML = playerOptions;
        });
    });