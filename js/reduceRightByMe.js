function reduceRight(array, callback, initialValue = null) {
	if (!array || !callback) {
		return new Error('Inappropriate arguments are passed')
	}

	const copyOfArray = [...array]
	let result

	if (initialValue) {
		result = initialValue
	}

	for (let i = copyOfArray.length - 1; i >= 0; i--) {
		result += callback(result, copyOfArray[i])
	}

	return result
}
const arr = [1, 1, 1]
const sum = x => x + x

console.log(reduceRight(arr, sum, 1))
