function generateColor(mode) {	
	if (mode === 'hexa') {
		let color = '';
		while (color.length < 6) {
			color += Math.random().toString(16).substring(2);
		}
		return '#' + color.slice(0, 6);
		
	} else if (mode === 'rgb') {

		const r = Math.floor(Math.random() * 256);
		const g = Math.floor(Math.random() * 256);
		const b = Math.floor(Math.random() * 256);
		return 	`rgb(${r}, ${g}, ${b})`;
	}
	return '';
}
console.log(generateColor('hexa'));
console.log(generateColor('rgb'));
