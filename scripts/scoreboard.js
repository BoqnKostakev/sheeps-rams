define(['underscore', 'jquery'], function() {
	var scoreboard = (function() {
		

		function saveState(userName, userScore){
			if (!userName.length) {
				return false;
			}

			localStorage.setItem(userName, userScore);
		}

		function clear () {
			localStorage.clear();
			$('#scoreboard').find('ul').empty();
		}

		function update(){
			var key,
				scores = [];

			for (var i = 0; i < localStorage.length; i++) {
				key = localStorage.key(i);
				scores.push({
								'name': localStorage.key(i), 
								'score': localStorage.getItem(key)
							});
			}
			getScores(scores);
		}

		function getScores (scores) {
			var sortedScores,
				$itemsList = $('#scoreboard').find('#scores'),
				$listItem,
				scoresCopy = scores.slice();

			sortedScores = _.sortBy(scoresCopy, function(score) {
				return +score.score;
			});

			$itemsList.empty();

			for (var i = 0, len = sortedScores.length; i < len; i++) {
				$listItem = $('<li />');
				$listItem.append('<strong>' + sortedScores[i].name + 
					'</strong> guess the <em>"Secret number"</em> in <strong>' + sortedScores[i].score + '</strong> attempts.');
				$itemsList.append($listItem);
			}
		}

		return {
			saveState: saveState,
			update: update,
			clear: clear
		};
	}());

	return scoreboard;
});