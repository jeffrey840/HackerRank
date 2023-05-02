function designerPdfViewer(h, word) {
	let maxHeight = 0;
	for (let i = 0; i < word.length; i++) {
		let charIndex = word.charCodeAt(i) - 97;
		maxHeight = Math.max(maxHeight, h[charIndex]);
	}
	return maxHeight * word.length;
}