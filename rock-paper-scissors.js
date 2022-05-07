// get user choice
var getUserChoice = function (userInput) {
    userInput = prompt('Choose One: Rock, Paper, or Scissors')
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || 'paper' || 'scissors') {
        return userInput;
    } else {
        console.log(`You must select rock, paper, or scissors. You entered ${userInput}`)
    }
}

// get computer choice
var getComputerChoice = function () {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// compare each choice, determine a winner
var determineWinner = function (userChoice, computerChoice) {
     if (userChoice === computerChoice) {
         return 'It\s a Tie!';
     }

     if (userChoice === 'bomb') {
         return 'User Wins!!'
     }

     if (userChoice === 'rock') {
         if (computerChoice === 'paper') {
             return 'Player Wins!';
         } else if (computerChoice === 'scissors') {
             return 'Computer Wins!';
         }
     } else if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'Player Wins!';
        } else if (computerChoice === 'scissors') {
            return 'Computer Wins!';
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return 'Player Wins!'
        } else if (computerChoice === 'rock') {
            return 'Computer Wins!'
        }
    }
}

// run program and share results
var playGame = function () {
    var userChoice = getUserChoice();
    console.log(`User chose ${userChoice}.`);
    var computerChoice = getComputerChoice();
    console.log(`Computer chose ${computerChoice}.`);
    console.log(determineWinner(userChoice, computerChoice));}

playGame();
