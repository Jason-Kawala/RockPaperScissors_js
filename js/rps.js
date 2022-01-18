console.log('Start');

function computerPlay() {
    var elements = ['rock','paper','scissors'];
    let choice = Math.floor(Math.random()*elements.length);
    return elements[choice];
}

function playerSelection() {
    var choice = prompt('Choose between Rock(r) Paper(p) and Scissors(s)').charAt(0);
    var elements = ['rock','paper','scissors'];

    while (choice != 'r' && choice != 'p' && choice != 's') {
    if (choice != 'r' && choice != 'p' && choice != 's') {
        var choice = prompt('Please choose between Rock(r) Paper(p) and Scissors(s)').charAt(0);
    } else {
        break;
    }
    }

    switch(choice) {
        case 'r':
            return elements[0];
        case 'p':
            return elements[1];
        case 's':
            return elements[2];
    }
}

function playGame(x=1) {
    const computer = computerPlay()
    const player = playerSelection()

    console.log(`You choose ${player} and computer choose ${computer}\n`)

    if (player == 'rock') {
        if (computer == 'rock') {
            console.log('This is a tie !')
        } else if (computer == 'paper') {
            console.log('You lost !')
        } else {
            console.log('You won !')
        }
    }

    if (player == 'paper') {
        if (computer == 'paper') {
            console.log('This is a tie !')
        } else if (computer == 'scissors') {
            console.log('You lost !')
        } else {
            console.log('You won !')
        }
    }

    if (player == 'scissors') {
        if (computer == 'scissors') {
            console.log('This is a tie !')
        } else if (computer == 'rock') {
            console.log('You lost !')
        } else {
            console.log('You won !')
        }
    }

} 