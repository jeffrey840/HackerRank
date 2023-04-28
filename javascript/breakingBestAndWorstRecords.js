// Define a function named "breakingRecords" that takes an array of scores as input
function breakingRecords(scores) {
	// Define variables to track the minimum and maximum scores seen so far,
	// as well as the number of times Maria breaks these records
	let minScore = scores[0];  // initialize to the first score
	let maxScore = scores[0];  // initialize to the first score
	let minCount = 0;
	let maxCount = 0;

	// Loop over the remaining scores in the array
	for (let i = 1; i < scores.length; i++) {
		// If the current score is less than the current minimum, update the minimum
		// score and increment the minimum count
		if (scores[i] < minScore) {
			minScore = scores[i];
			minCount++;
			// If the current score is greater than the current maximum, update the maximum
			// score and increment the maximum count
		} else if (scores[i] > maxScore) {
			maxScore = scores[i];
			maxCount++;
		}
	}

	// Return an array with the counts of maximum and minimum score records broken
	return [maxCount, minCount];
}
