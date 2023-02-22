function sockMerchant(n, ar) {

	//keep count how many socks of each kind we find, and how many pairs there are.

	let socks = {};
	let pairs = 0;

	for (let element of ar) {
		socks[element] = socks[element] + 1 || 1;//This means that the value of a given element in the sock object is going to equal that same value plus 1 (assuming I’ve seen it before) or 1 (assuming it’s the first time I see it). So in the end, we should have an object that looks like this:

		//socks = {
		// 1: 3,
		// 2: 3,
		// 3: 1
		// }
		if (socks[element] % 2 === 0) {
			pairs += 1;
		}//only count those socks (numbers) that are pairs, or divisible by 2.
	}
	return pairs;

}