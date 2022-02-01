const icons = document.querySelectorAll('.icon');
const player = document.querySelector('.player span');
const computer = document.querySelector('.computer span');
const result = document.querySelector('.result');
let playerScore = 0;
let computerScore = 0;

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        let playerChoice = icon.classList[1];
        let computerChoice = computerPlay();
        let round = playRound(playerChoice, computerChoice);
        console.log(`Score player : ${playerScore}`); // temporary, just to show in console to make sure
        console.log(`Score comp : ${computerScore}`); // temporary, just to show in console to make sure
        player.innerHTML = playerScore;
        computer.innerHTML = computerScore;
        if (round == 0) {
            result.innerHTML = 'Tie';
        } else if (round == 2) {
            result.innerHTML = 'You won!'
        } else {
            result.innerHTML = 'Computer won..'
        }
    })
})




// Computer make a 'choice'
function computerPlay() {
    var elements = ['rock','paper','scissors'];
    let choice = Math.floor(Math.random()*elements.length);
    return elements[choice];
}

// one round of the game and return 0 1 or 2 based on user result -- 0-tie 1-lost 2-won
function playRound(player, computer) {

    console.log(`You choose ${player} and computer choose ${computer}\n`);

    if (player == 'rock') {
        if (computer == 'rock') {
            console.log('This is a tie !');
            return 0;
        } else if (computer == 'paper') {
            console.log(`You lost ! ${computer} beats ${player}`);
            computerScore += 1;
            return 1;
        } else {
            console.log(`You won ! ${player} beats ${computer}`);
            playerScore += 1;
            return 2
        }
    }

    if (player == 'paper') {
        if (computer == 'paper') {
            console.log('This is a tie !');
            return 0;
        } else if (computer == 'scissors') {
            console.log(`You lost ! ${computer} beats ${player}`);
            computerScore += 1;
            return 1;
        } else {
            console.log(`You won ! ${player} beats ${computer}`);
            playerScore += 1;
            return 2;
        }
    }

    if (player == 'scissors') {
        if (computer == 'scissors') {
            console.log('This is a tie !');
            return 0;
        } else if (computer == 'rock') {
            console.log(`You lost ! ${computer} beats ${player}`);
            computerScore += 1;
            return 1;
        } else {
            console.log(`You won ! ${player} beats ${computer}`);
            playerScore += 1;
            return 2;
        }
    }

}

// ----------------- OLD CONSOLE GAME FUNCTIONS ------------------------

// Player choose between Rock Paper and Scissors
// function playerSelection(choice) {
//     var elements = ['rock','paper','scissors'];

//     switch(choice) {
//         case 'rock':
//             return elements[0];
//         case 'paper':
//             return elements[1];
//         case 'scissors':
//             return elements[2];
//     }
// }

// Play game where x is the number of rounds given
// function playGame(x) {
//     let playerScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i<x; i++) {
//         let game = playRound(); // Play a round and store the returned result to this variable
//         switch (game) {
//             case 0: // Tie
//                 console.log('Tie');
//                 break;
//             case 1: // Computer wins
//                 computerScore += 1;
//                 console.log(`${playerScore} to ${computerScore}`);
//                 break;
//             case 2: // Player wins
//                 playerScore += 1;
//                 console.log(`${playerScore} to ${computerScore}`);
//                 break;
//         }
//     }

//     // Check who won the game
//     if (playerScore == computerScore) {
//         console.log('Oh, that was a tough one, tie !');
//     } else if (playerScore > computerScore) {
//         console.log(`Congratulation, you won ! ${playerScore} to ${computerScore}`);
//     } else {
//         console.log(`You lost.. ${playerScore} to ${computerScore}`);
//     }
// }