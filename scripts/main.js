(function() {

	require.config({
			paths: {
				'jquery': 'libs/jquery',
				'underscore': 'libs/underscore',
				'functions': 'functions',
				'validator': 'validator',
				'gameui': 'ui',
				'scoreboard': 'scoreboard'
			}
	});

	require(['jquery', 'functions', 'validator', 'gameui', 'scoreboard'], function($, functions, validator, gameui, scoreboard) {

		var secretNumber = functions.generateSecretNumber(),
			userInput,
			userName,
			attempts = 0,
			compareResult;

		console.log(secretNumber);

		$('#submit-user-input').on('click', function() {
			// TODO: extract this into separate module
			userInput = $('#user-input').val();

			if (validator(userInput)) {

				compareResult = functions.compareUserInput(userInput, secretNumber);

				if (compareResult.markedRams == 'xxxx') {
					gameui.successScreen(secretNumber);
				} else {
					gameui.showRamsAndSheeps(compareResult.numberRams, compareResult.numberSheeps);
					attempts++;
				}
	
			} else {
				gameui.errMessage();
			}
		});

		$('#user-name-submit').on('click', function() {
			// check (escape) the user input
			// mark private variables/functions
			// fix user name length
			var userName = $('#user-name').val();

			scoreboard.saveState(userName, attempts);

			// set new secret number
			secretNumber = functions.generateSecretNumber();
			attempts = 0;
			gameui.closeSuccessScreen();
		});
	});
	
}());
