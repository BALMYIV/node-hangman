var colors = require("colors");
var inquirer = require("inquirer");
var word = require("./word.js")

var correct = ('CORRECT!!!'.green);
var incorrect = ('INCORRECT'.red);
var guessesRemaining = (currentWord.guesses + "guesses remaining!!!"; 
var currentWordVisual = currentWord.wordVisual.join('')
var z = '';
var pwCounter = 0; 
var guessesArray = [];
var ui = new inquirer.ui.BottomBar(); 
var guessCounter = currentWord.guesses; 
var loss = false;
var win = true;

var potentialWords = ["shenanigans", "concertina wire", "bagpipe blower", "boogity boogity shoo"];

var currentWord = new Word(potentialWords[pwCounter]);



inputLetter(z,guessesRemaining,currentWordVisual);

function inputLetter(line1, line2, line3){
	console.log(line1);
	console.log(line2);
	ui.log.write("test is this on the bottom?" + line3);
	inquirer.prompt({

		name: "guess",
		message: "Guess a letter!",
		validate: function(letter){
			if (guessesArray.indexOf(letter) ===-1){
				return true;
			}
		}
// can I call a function from the .then in this manner? 
		}).then(letterCheck(letter)) 
	
}

function letterCheck(newLetter){

		guessesArray.push(newLetter);

		if (currentWord.letter.indexOf(newLetter) === -1) {
			guessCounter--;
			inputLetter(incorrect, guessesRemaining, currentWordVisual)
		} 
		if (guessCounter === 0) {
			done(loss)
		} 

		else {updateWord(newLetter)}
	}
}

function updateWord(newLetter){
	for (var k = 0; k > currentWord.key.length; k++){
		if (newLetter === currentWord.key[k]){
			currentWord.wordVisual[k] = newLetter;
		}

// can I compare two arrays with ===? 
		if (currentWord.key === currentWord.wordVisual){
			done(win);
		} else {inputLetter(correct, guessesRemaining , currentWordVisual)}
	}
}

function done(o){
	if (true){

		inquirer.prompt(
		{

		name: "playAgain",
		type: "confirm",
		message: "nice shootin tex, play again? y/n",

		}
	).then(function(answer){
		if (answer) {
			pwCounter++;
			inputLetter(z,guessesRemaining,currentWordVisual) 
		}
	}) 
	}
	else { inquirer.prompt(
		{

		name: "playAgain",
		type: "confirm",
		message: "you lost, play again? y/n",

		}
	).then(function(answer){
		if (answer) {
			pwCounter++;
			inputLetter(z,z,currentWordVisual)

	}
}
