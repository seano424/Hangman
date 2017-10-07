//Global
//============================================================================================================
//Create an array of words
const word = ['Lebron', 'Steph', 'Kobe', 'Joel Embiid', 'Kawhi', 'Dwyane Wade', 'Westbrook', 'Giannis', 'Valanciunas', 'Nowitzki']
//Choose word randomly 
	let randNum = Math.floor(Math.random() * word.length);
	let chosenWord = word[randNum];
	let rightWord = [];
	let wrongWord = [];
	let underScore = [];

//DOM manipulation
let docUnderScore = document.getElementsByClassName('underscore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');

//Main
//=====================================================
console.log(chosenWord);
//Create underscores based on length of word
let generateUnderscore = () => {
	for(let i = 0; i < chosenWord.length; i++) {
		underScore.push('_');

	}
	return underScore;
	};

	//

console.log(generateUnderscore());
//Get users guess
document.addEventListener('keypress', (event) => {
	let keyword = String.fromCharCode(event.keyCode);
// if users guess is right
	if(chosenWord.indexOf(keyword) > -1) {
		//add to right words array
		rightWord.push(keyword);

		underScore[chosenWord.indexOf(keyword)] = keyword;
		docUnderScore[0].innerHTML = underScore.join(' ');
		docRightGuess[0].innerHTML = rightWord.join(' ');

		//replace underscore with the right letter

		if(underScore.join('') == chosenWord) {
			alert('You Win');
		}

	}
	else {
		wrongWord.push(keyword);
		docWrongGuess[0].innerHTML = wrongWord;
	}

});

docUnderScore[0].innerHTML = generateUnderscore().join(' ');

													
// 													docUnderScore[0].innerHTML = underScore.join('');
// 													docRightGuess[0].innerHTML = rightWord.join('');
// 												}

// 													// else if(chosenWord.indexOf(keyword) != chosenWord) {
// 													// 	rightWord.push(keyword);
// 													// 	docRightGuess[0].innerHTML = rightWord.join('');
// 													// 	document.getElementById('numberOfGuesses').innerHTML = numberOfGuesses =- 1;
// 													// }

// 													//
// 													if(numberOfGuesses === 0){
// 														alert('Game Over');
// 													}

// 													//checks to see if user word matches guesses
												

// 											});
// //Check if guess is right

// //if right push to right array
// //if wrong push to wrong array













