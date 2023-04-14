
function staircase(n) {
	for (let i = 1; i <= n; i++) {
		let spaces = n - i;
		let stairs = i;
		let line = "";
		for (let j = 0; j < spaces; j++) {
			line += " ";
		}
		for (let k = 0; k < stairs; k++) {
			line += "#";
		}
		console.log(line);
	}
}