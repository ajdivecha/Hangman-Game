// alert start the game
alert("Press ok to get started");

// the array that holds the words we choose from
var breeds = ["bulldog", "labrador", "poodle", "boxer", "terrier"];

// the function to pick a random breed
var breed = breeds [Math.floor(Math.random()*breeds.length)];

//answerArray with (___) to match the number of letters
var answerArray = [];
for (var i=0; i < breed.length; i++) {
	answerArray[i] = "_";
}

//how many numbers are left
var ramainingLetters = breed.length;

//answerArray.join will give a cleaner appearance the the answer section
alert(answerArray.join(""));

var guess = prompt ("Guess a letter");

if (guess === null) {
	break;
} else if (guess.length !== 1) {
	alert("enter a letter"); {
		else {

		}
	}
}

for (var i = 0; i <breed.length; i++) {
	if (breed[i] === guess)
}

// // players has 5 lives per game ---> 5 wrong guesses
// var lives = 0;

// var answerArray = [];

// // When the user presses a key, it will run the following function...
// document.onkeyup = function(event) {

// //to determine which key was pressed
// var userGuess = event.key;

// // underscores required for answer array
// function userGuess () {
// 	for (var i = 0; i < breed.length; i++) {
// 		answerArray[i] = "_";
// 	}

// //adding a string to break up the answers into single characters
// 	s = answerArray.join("");
// 	document.getElementById("answer").innerHTML = s;
// }

// //if the correct letter is selected, it should populated the ____ section. It uses the breed breed variable defined in line 8 as a key variable. 
// 	function letter () {
	
// 		var letter = document.getElementByID("letter").value;

// 		if (letter.length > 0) {
// 		for (var i= 0; i < breed.length; i++) {
// 		if (breed[i] === letter) {
// 		answerArray[i] = letter;
// 	}
// 		}

// 	lives++
// 	doucment.getElementById("counter").innerHTML = "clicks: " + count;

// 	document.getElementById("answer").innerHTML = answerArray.join("");
// }

// 	if(lives>5) {
// 		document.getElementById("stat").innherHTML = "YOU LOSE!";
// 	}
	
// }
// }

		

	





// //if user guesses word, alert WINNER!


// //if else, YOU LOSE!












