// Sélection de l'élément du carré par son id
const square = document.getElementById("square");

// Valeur de déplacement à chaque pression de touche (en pixels)
const step = 10;

// Représente les positions actuelles du carré
let posX = 0; // Position initiale sur l'axe X
let posY = 0; // Position initiale sur l'axe Y

// Ajoute un écouteur d'événement pour détecter les touches pressées
document.addEventListener("keydown", function (e) {
	// Vérifie quelle touche est pressée et ajuste la position en conséquence
	switch (e.key) {
		case "ArrowUp":
			posY += step; // Déplace le carré vers le haut
			// posY = posY + step
			square.style.marginBottom = `${posY}px`;
			console.log(posY);
			break;
		case "ArrowDown":
			posY -= step; // Déplace le carré vers le bas
			square.style.marginTop = `${-posY}px`;
			break;
		case "ArrowLeft":
			posX += step; // Déplace le carré vers la gauche
			square.style.marginRight = `${posX}px`;
			break;
		case "ArrowRight":
			posX -= step; // Déplace le carré vers la droite
			square.style.marginLeft = `${-posX}px`;
			break;
		default:
			// Pour toute autre touche, ne rien faire (on pourrait aussi afficher un message ou effectuer une autre action)
			console.log("Touche non prise en charge : " + e.key);
			break;
	}
});
