function divisibleSumPairs(n, k, ar) {
	let freq = new Array(k).fill(0);
	let count = 0;

	for (let i = 0; i < n; i++) {
		freq[ar[i] % k]++;
	}

	count += freq[0] * (freq[0] - 1) / 2;
	for (let i = 1; i <= k / 2 && i !== k - i; i++) {
		count += freq[i] * freq[k - i];
	}
	if (k % 2 === 0) {
		count += freq[k / 2] * (freq[k / 2] - 1) / 2;
	}

	return count;
}

//The function takes three arguments: n (the length of the array),
// k (the integer divisor), and ar (the array of integers). It returns the number of valid pairs in the array whose sum is divisible by k.
//
// We initialize a frequency array of size k,
// and iterate through the array ar to count the occurrences of all remainders when divided by k. We then count the number of valid pairs as described above, and return the count.
//
// This implementation has a time complexity of O(N) and an auxiliary space of O(K), where K is the size of the frequency array.
