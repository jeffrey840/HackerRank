function timeConversion(s) {
	let hours = parseInt(s.substr(0, 2));
	let minutes = s.substr(3, 2);
	let seconds = s.substr(6, 2);
	let meridiem = s.substr(8, 2);

	if (meridiem === "PM" && hours !== 12) {
		hours += 12;
	} else if (meridiem === "AM" && hours === 12) {
		hours = 0;
	}

	return (
		(hours < 10 ? "0" + hours : hours) +
		":" +
		minutes +
		":" +
		seconds
	);
}
