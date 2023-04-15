
function miniMaxSum(arr) {
	let minSum = Number.MAX_SAFE_INTEGER;
	let maxSum = 0;
	let sum = 0;

	// Find the sum of all elements in the array
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	// Find the minimum and maximum sum of 4 elements
	for (let i = 0; i < arr.length; i++) {
		let tempSum = sum - arr[i];
		minSum = Math.min(minSum, tempSum);
		maxSum = Math.max(maxSum, tempSum);
	}

	console.log(`${minSum} ${maxSum}`);
}

