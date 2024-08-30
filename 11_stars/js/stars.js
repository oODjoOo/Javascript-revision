document.addEventListener("DOMContentLoaded", function () {
	// Fonction pour générer une taille aléatoire entre minSize et maxSize en px
	// À l'appel de la fonction on indiquera l'intervalle voulue
	function getRandomSize(minSize, maxSize) {
		// On rajoute + 1 pour atteindre la valeur maximale sans ça on atteint la valeur juste avant
		console.log(Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize);
		return Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
	}

	// Fonction pour créer une étoile
	function createStar() {
		const star = document.createElement("div");
		star.classList.add("star");

		// On détermine la taille de l'étoile
		const size = getRandomSize(5, 15);
		star.style.width = `${size}px`;
		star.style.height = `${size}px`;

		// On positionne l'étoile de manière aléatoire dans la fenêtre
		const x = Math.random() * window.innerWidth;
		console.log(window.innerWidth);
		//console.log(x);
		const y = Math.random() * window.innerHeight;
		console.log(window.innerHeight);
		//console.log(y);
		star.style.left = `${x}px`;
		star.style.top = `${y}px`;

		document.body.appendChild(star);
	}

	// Ajoute un gestionnaire d'événement pour créer une étoile à chaque clic
	document.addEventListener("click", createStar);
});
