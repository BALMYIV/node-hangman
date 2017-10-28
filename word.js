console.log('potato is loaded');


function Word(potentialWord){
	this.guesses = Math.floor(potentialWord.length * 1.64);
	this.key = [...potentialWord]; 
	this.wordVisual = function(potentialWord){
		var q = [...word]
		q.forEach(function(letter)){
			if (letter.keyCode === 32) {
				true}
			else {letter = "_" }
			}
		}
	}
} 









 module.exports = word;