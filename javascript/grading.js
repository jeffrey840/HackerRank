
function gradingStudents(grades) {
	const result = [];
	for (let i = 0; i < grades.length; i++) {
		const grade = grades[i];
		if (grade < 38) {
			result.push(grade);
		} else {
			const nextMultiple = Math.ceil(grade / 5) * 5;
			if (nextMultiple - grade < 3) {
				result.push(nextMultiple);
			} else {
				result.push(grade);
			}
		}
	}
	return result;
}

//In this implementation, we are iterating through each grade in the input array using a for loop. For each grade, we are checking if it is less than 38. If it is less than 38, we simply push it to the result array without rounding.
//
// If the grade is greater than or equal to 38, we calculate the next multiple of 5 greater than the grade using the Math.ceil() function. We then check if the difference between the next multiple and the grade is less than 3. If it is less than 3, we push the next multiple to the result array. Otherwise, we push the original grade to the result array.
//
// Finally, we return the result array containing the rounded grades.

console.log(gradingStudents([12, 73, 38, 90, 75]));



