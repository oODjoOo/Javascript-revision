document.addEventListener("DOMContentLoaded", function () {
	const colorBox = document.getElementById("color-box");
	console.log(Math.floor(Math.random()));
	// Fonction pour générer une couleur aléatoire en hexadécimal
	function getRandomColor() {
		const letters = "0123456789ABCDEF";
		let color = "#";
		let i;
		for (i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		// console.log(letters[i]);
		// console.log(letters[Math.floor(Math.random() * 16)]);

		return color;
	}

	getRandomColor();

	// Changer la couleur du carré au survol de la souris avec une couleur aléatoire
	colorBox.addEventListener("mouseover", function () {
		colorBox.style.backgroundColor = getRandomColor(); // Couleur aléatoire
	});

	// Rétablir la couleur d'origine lorsque la souris quitte le carré
	colorBox.addEventListener("mouseout", function () {
		colorBox.style.backgroundColor = "#3498db";
	});

	// Agrandir le carré au clic
	colorBox.addEventListener("click", function () {
		colorBox.style.width = "20rem";
		colorBox.style.height = "20rem";
	});

	// Réduire le carré à sa taille initiale au double-clic
	colorBox.addEventListener("dblclick", function () {
		colorBox.style.width = "15rem";
		colorBox.style.height = "15rem";
	});
});
