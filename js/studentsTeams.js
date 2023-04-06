const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Chris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {

	const sorted = arr.sort();
	const studentTeams = [];
	const tempArr = [];
	// let inCompleteTeam = [];

	sorted.forEach((elem, index) => {

		if (tempArr.length < 3) {
			tempArr.push(elem);
		}
		if (tempArr.length === 3 && index !== sorted.length - 1) {
			// tempArr.map(element => studentTeams.push(element));
			studentTeams.concat(tempArr);
			console.log('This is students array: ' + studentTeams);	
			console.log('This is temp array: ' + tempArr);
			tempArr.length = 0;
			console.log('This is students array: ' + studentTeams);
		} 
		if ( index === sorted.length - 1) {
			// console.log('This is students array: ' + studentTeams);
			// console.log(typeof(studentTeams));
			// console.log('This is temp array last elem: ' + tempArr);
			studentTeams.push(tempArr.join());
			// console.log('This is  incomplete team: ' + inCompleteTeam);

		}
		
	});
	// console.log(studentTeams);
	return studentTeams;
}
const ramambaharumamburu = sortStudentsByGroups(students);
console.log(ramambaharumamburu);