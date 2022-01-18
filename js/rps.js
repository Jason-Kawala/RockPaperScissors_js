console.log('Hello World');

function computerPlay() {
    var elements = ['rock','paper','scissors'];
    let choice = Math.floor(Math.random()*elements.length);
    return elements[choice];
}

function playerSelection() {
    var choice = prompt('Choose between Rock(r) Paper(p) and Scissors(s)').charAt(0);
    var elements = ['rock','paper','scissors'];
    console.log(choice)

    while (choice != 'r' || choice != 'p' || choice != 's') {
    if (choice != 'r' || choice != 'p' || choice != 's') {
        var choice = prompt('Please choose between Rock(r) Paper(p) and Scissors(s)').charAt(0);
    } else {
        break;
    }
    }

    console.log(choice)
}