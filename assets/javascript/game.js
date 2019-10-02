var wins = 0;
var losses = 0;
var remainingGuesses = 9;
var computerGuess;
var userGuess = [];

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function randomLetter() {
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerGuess);
}

randomLetter();

function resetFunction() {
    remainingGuesses = 9;
    document.getElementById("remainingGuesses").textContent = "Guesses Left: " + remainingGuesses;
    randomLetter();
    userGuess = [];
    document.getElementById("lettersGuessed").innerHTML = "Guesses So Far: " + userGuess;
}

document.onkeyup = function (event) {
    var playerGuess = event.key;
    userGuess.push(playerGuess);
    document.getElementById("lettersGuessed").innerHTML = "Guesses So Far: " + userGuess;
    if (playerGuess === computerGuess) {
        wins++;
        console.log(wins);
        document.getElementById("wins").textContent = "Wins: " + wins;
        resetFunction();

    }
    else {
        console.log(losses);
        remainingGuesses--;
        document.getElementById("remainingGuesses").innerHTML = "Guesses Left: " + remainingGuesses;

        if (remainingGuesses === 0) {
            losses++
            document.getElementById("losses").textContent = "Losses: " + losses;
            resetFunction();
        }
    };
}