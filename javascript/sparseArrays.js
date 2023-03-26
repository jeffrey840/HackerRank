

//Create an empty hash table called freq.
//
// Iterate over the input array (strings), and for each string s:
// If s is not in freq, set freq[s] to 1.
// If s is in freq, increment freq[s] by 1.
//
// Create an empty array called res.
//
// Iterate over the query array (queries), and for each query string q:
// If q is in freq, add the frequency of q to res.
// If q is not in freq, add 0 to res.
//
// Return res.

//the strings Array have to match the queries array
// return the number of instances they occur in an array

function matchingStrings(strings, queries) {
	let freq = {};

	for (let s of strings) {
		freq[s] = (freq[s] || 0) + 1;
	}

	let res = [];

	for (let q of queries) {
		res.push(freq[q] || 0);
	}

	return res;
}

console.log(matchingStrings(["hello", "hello"], ["hello","lorem","ipsum"]));

