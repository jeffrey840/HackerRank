function birthdayCakeCandles(candles) {
	// find the maximum height of the candles
	const maxHeight = Math.max(...candles);

	// count how many candles have the maximum height
	let count = 0;
	for (let i = 0; i < candles.length; i++) {
		if (candles[i] === maxHeight) {
			count++;
		}
	}

	return count;
}
