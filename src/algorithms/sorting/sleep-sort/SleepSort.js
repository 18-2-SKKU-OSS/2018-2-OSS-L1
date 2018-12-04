import Sort from '../Sort';

export default class SleepSort extends Sort {
  sort(originalArray) {
    // Clone original array to prevent its modification.
    const array = [...originalArray];
    var result = [];

    array.forEach(function(i) {
		setTimeout(function() {
			result.push(i);
			
			if(result.length == array.length) {
				return result;
			}
		}, i);
	});
  }
}