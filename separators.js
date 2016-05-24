'use strict';

function thousands_separators(num) {
 		num += '';
		var pattern = /^(\+|-)?(\d+)(\d{3})/;
		while(pattern.test(num)){
		}
		return num;
}

module.exports = thousands_separators;
