define(['underscore'], function(_) {
	
	var gameFunctions = (function() {

		function randomInt(min,max) {
		    return Math.floor(Math.random() * (max - min + 1) + min);
		}
		
		function generateSecretNumber () {
			var secretNumber,
				digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

			secretNumber = _.first(_.shuffle(digits), 4);

			// returns secretNumber as string
			return secretNumber.join('');
		}

		function checkForRams (userInput, number) {
			var markedRams = '', numberRams = 0, i, len;

			for (i = 0, len = number.length; i < len; i++) {
				if (number[i] === userInput[i]) {
					markedRams += 'x';
					numberRams++;
				} else {
					markedRams += number[i];
				}
			}

			return {
				markedRams: markedRams,
				numberRams: numberRams
			};
		}

		function checkForSheeps (userInput, number) {
			var numberSheeps = 0, i, j, len;

			for (i = 0, len = number.length; i < len; i++) {
				for(j = 0; j < len; j++) {
					if (userInput[j] === number[i]) {
						numberSheeps++;
					}
				}
			}

			return numberSheeps;
		}

		function compareUserInput (userInput, secretNumber) {
			var sheeps,
				rams;

			rams = checkForRams(userInput, secretNumber);
			sheeps = checkForSheeps(userInput, rams.markedRams);

			return {
				numberRams: rams.numberRams,
				markedRams: rams.markedRams,
				numberSheeps: sheeps
			};
		}



		return {
			generateSecretNumber: generateSecretNumber,
			compareUserInput: compareUserInput
		};
	}());


	return gameFunctions;
});