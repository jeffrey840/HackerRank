function countApplesAndOranges(s, t, a, b, apples, oranges) {
	let appleCount = 0;
	let orangeCount = 0;

	// Count apples that land on the house
	for (let i = 0; i < apples.length; i++) {
		let position = a + apples[i];
		if (position >= s && position <= t) {
			appleCount++;
		}
	}

	// Count oranges that land on the house
	for (let i = 0; i < oranges.length; i++) {
		let position = b + oranges[i];
		if (position >= s && position <= t) {
			orangeCount++;
		}
	}

	console.log(appleCount);
	console.log(orangeCount);
}
