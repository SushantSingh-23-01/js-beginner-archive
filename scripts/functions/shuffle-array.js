function shuffleArray(array) {
    const shuffled = [...arr];
	for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
	return shuffled;
}

let arr = ['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot'];
shuffledArr = shuffleArray(arr);

console.log(arr);
console.log(shuffledArr);
