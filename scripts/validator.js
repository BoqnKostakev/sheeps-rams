define(function() {
	
	var validator = (function() {
		
		function validateValue (input) {
			// reason of parsing is because input is string, when parsed to int ,leading 0
			// is removed (zero padding) and again parsed to string to check the if the length is changed.
			input = parseInt(input);
			var inputLength = input.toString().length;

			if (isNaN(input)) {
				return false;
			}

			if (inputLength < 4) {
                return false;
            }

            if (!isUnique(input.toString())) {
            	return false;
            }

			return true;
		}

		function isUnique(input) {
		    var map = {}, i, size;

		    for (i = 0, size = input.length; i < size; i++){
		        if (map[input[i]]){
		            return false;
		        }

		        map[input[i]] = true;
		    }

		    return true;
		}

		return validateValue;
	}());


	return validator;
});