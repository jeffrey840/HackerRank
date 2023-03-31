
function plusMinus(arr) {

	let n = arr.length
	let pos = 0
	let neg = 0
	let zero = 0

	for(let i = 0;i < arr.length;i++) {

		if (arr[i] === 0) {
			zero ++
		} else if (arr[i] < 0) {
			neg++
		} else {
			pos++
		}

	}

	console.log((pos/n).toFixed(6));
	console.log((neg/n).toFixed(6));
	console.log((zero/n).toFixed(6));
}


