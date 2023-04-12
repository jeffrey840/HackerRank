
function reverseArray(a) {
	// Write your code here
	// We initialize two pointers start and end to the first and last indices of the array respectively.
	let start = 0;
	let end = a.length - 1;
	// We use a while loop to swap the elements at start and end indices until the pointers meet at the center of the array.
	while (start < end) {
		// Inside the loop, we swap the elements at start and end indices using a temporary variable temp.
		let temp = a[start];
		a[start] = a[end];
		a[end] = temp;
		// We increment start and decrement end to move the pointers towards the center of the array.
		// Once the pointers meet at the center of the array, we have reversed the array.
		start++;
		end--;
	}
	// Finally, we return the reversed array a.
	return a;
}


