const icons = document.querySelectorAll('.icon');
const playerScore = document.querySelector('.player');
const computerScore = document.querySelector('.computer');

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        let choice = icon.classList[1];
        console.log(choice);
    })
})







// Computer make a 'choice'
function computerPlay() {
    var elements = ['rock','paper','scissors'];
    let choice = Math.floor(Math.random()*elements.length);
    return elements[choice];
}

// Player choose between Rock Paper and Scissors
function playerSelection(choice) {
    var elements = ['rock','paper','scissors'];

    switch(choice) {
        case 'rock':
            return elements[0];
        case 'paper':
            return elements[1];
        case 'scissors':
            return elements[2];
    }
}

// Play game where x is the number of rounds given
function playGame(x) {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i<x; i++) {
        let game = playRound(); // Play a round and store the returned result to this variable
        switch (game) {
            case 0: // Tie
                console.log('Tie');
                break;
            case 1: // Computer wins
                computerScore += 1;
                console.log(`${playerScore} to ${computerScore}`);
                break;
            case 2: // Player wins
                playerScore += 1;
                console.log(`${playerScore} to ${computerScore}`);
                break;
        }
    }

    // Check who won the game
    if (playerScore == computerScore) {
        console.log('Oh, that was a tough one, tie !');
    } else if (playerScore > computerScore) {
        console.log(`Congratulation, you won ! ${playerScore} to ${computerScore}`);
    } else {
        console.log(`You lost.. ${playerScore} to ${computerScore}`);
    }
}

// one round of the game and return 0 1 or 2 based on user result -- 0-tie 1-lost 2-won
function playRound() {
    const player = playerSelection();
    const computer = computerPlay();

    console.log(`You choose ${player} and computer choose ${computer}\n`);

    if (player == 'rock') {
        if (computer == 'rock') {
            console.log('This is a tie !');
            return 0;
        } else if (computer == 'paper') {
            console.log(`You lost ! ${computer} beats ${player}`);
            return 1;
        } else {
            console.log(`You won ! ${player} beats ${computer}`);
            return 2;
        }
    }

    if (player == 'paper') {
        if (computer == 'paper') {
            console.log('This is a tie !');
            return 0;
        } else if (computer == 'scissors') {
            console.log(`You lost ! ${computer} beats ${player}`);
            return 1;
        } else {
            console.log(`You won ! ${player} beats ${computer}`);
            return 2;
        }
    }

    if (player == 'scissors') {
        if (computer == 'scissors') {
            console.log('This is a tie !');
            return 0;
        } else if (computer == 'rock') {
            console.log(`You lost ! ${computer} beats ${player}`);
            return 1;
        } else {
            console.log(`You won ! ${player} beats ${computer}`);
            return 2;
        }
    }

}