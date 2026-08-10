function userIdGenerator(length) {
	let result = '';
	while (result.length < length) {
		// Random -> [0, 1) random float Number
		// toSting -> convert to hexadecimal
		// remove first two constant terms '0' & '.'
		result += Math.random().toString(16).substring(2)
	}
	
	// Trim the final string to the exact length requested
	return result.slice(0, length);
}

function userIdGeneratorByUser(length, numIds) {
	const allIds = []
	for (let i = 0; i < numIds; i++) {
		allIds.push(userIdGenerator(length));
	}
	return allIds
}

console.log(userIdGeneratorByUser(12, 3));
