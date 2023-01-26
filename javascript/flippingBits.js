function flippingBits(n) {
// declare variables for binary, inverse binary, and decimal result
	let lowBin = ''
	let highBin= ''
	let result = 0
// convert input decimal to binary
	while (n >= 1) {
		const rem = n % 2
		lowBin += rem
		rem === 1 ?
			n = Math.floor(n / 2) :
			n /= 2
	}
// adjust binary to 32 bits
	while (lowBin.length < 32) {
		lowBin += 0
	}
// reverse and invert each bit of binary
	for (let i = lowBin.length - 1; i >= 0; i--) {
		highBin += lowBin[i] === '0' ? '1' : '0'
	}
// convert binary to decimal output
	for (let i = 0; i < highBin.length; i++) {
		const expo = highBin.length - 1 - i
		result += highBin[i] * (2 ** expo)
	}
	return result
}