define(['jquery', 'scoreboard'], function($, scoreboard) {
	
	var gameUi = (function() {
		
		$('#toggle-description').on('click', function() {
			$(this).text(function(i, text){
		    	return text === "Show the rules" ? "Hide the rules" : "Show the rules";
		    });
			$('#game-container').find('.description').slideToggle('fast');
		});

		$('#show-scoreboard').on('click', function() {
			scoreboard.update();
			$('#game-container').addClass('blurred');
			$('#scoreboard').fadeIn();
		});

		$('#close-scoreboard').on('click', function() {
			$('#game-container').removeClass('blurred');
			$('#scoreboard').fadeOut();
		});

		$('#clear-score-board').on('click', function() {
			scoreboard.clear();
		});

		function errMessage () {
			$('#user-feedback').text('You must enter four different digits in the field above. First cannot be zero.').css('color', '#F25050');
		}

		function successScreen (secretNumber) {
			$('#game-container').addClass('blurred');
			$('#success-screen').find('p').text('Congratulations you find the secret number: ' + secretNumber);
			$('#success-screen').fadeIn();
		}

		function closeSuccessScreen () {
			$('#user-input').val('');
			$('#user-feedback').val('');
			$('#game-container').removeClass('blurred');
			$('#success-screen').fadeOut();
		}

		function showRamsAndSheeps (rams, sheeps) {
			$('#user-feedback').text('Sheeps: ' + sheeps + '  Rams: ' + rams).css('color', '#6E6E6E');		
		}

		return {
			errMessage: errMessage,
			successScreen: successScreen,
			closeSuccessScreen: closeSuccessScreen,
			showRamsAndSheeps: showRamsAndSheeps
		};
	}());


	return gameUi;
});