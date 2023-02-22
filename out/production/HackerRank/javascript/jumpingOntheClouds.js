function jumpingOnClouds(c) {

	// ex: c = [0,1,0,0,0,1,0] , avoid 1 and "jump to next 0"
	// it either takes 3 or 4 jumps
	// return 3

	let stepsArray = [];
	let i = 0;
	while(i < c.length - 1){

		if ((i+2<c.length) && (c[i+2] === 0)) {
			stepsArray.push(c[i + 2]);
			i+=2;
		} else{
			stepsArray.push(c[i + 1]);
			i+=1;
		}

	}
	return stepsArray.length

}