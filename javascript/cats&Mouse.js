

function catAndMouse(x, y, z) {
	let Mouse = z
	const CatA = Math.abs(x - z);
	const CatB = Math.abs(y - z);

	if (CatA < CatB  ){
		return "Cat A";
	} else if (CatA  > CatB ){
		return "Cat B";
	} else {
		return "Mouse C";
	}
}