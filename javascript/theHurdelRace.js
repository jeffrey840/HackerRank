function hurdleRace(k, height) {
	let max_height = Math.max(...height);
	let diff = max_height - k;
	return diff > 0 ? diff : 0;
}