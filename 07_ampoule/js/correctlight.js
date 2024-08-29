// ---- VARIABLES ET CONSTANTES GLOBALES

let lightbulb = document.getElementById("lightbulb"); // L'objet DOM représentant la balise <img>
let toggleButton = document.getElementById("toggle-button"); // L'objet DOM représentant la balise <button>
let body = document.querySelector("body");

// ---- FONCTIONS

function onClickToggleLight() {
	// Est-ce que le bouton dit que la lumière est allumée ?
	if (toggleButton.textContent === "Allumer la lumière") {
		// Oui, le bouton indique d'éteindre la lumière.
		toggleButton.innerHTML = "Éteindre la lumière";

		// Changement de style du fond de la page
		body.style.backgroundColor = "#818181";

		// Remplacement par l'image de l'ampoule allumée.
		lightbulb.src = "./images/on.png";
	} else {
		// Non, le bouton indique d'allumer la lumière.
		toggleButton.innerHTML = "Allumer la lumière";

		// Changement de style du fond de la page
		body.style.backgroundColor = "#edd37c";

		// Remplacement par l'image de l'ampoule éteinte.
		lightbulb.src = "./images/off.png";
	}
}

// Installation du gestionnaire d'évènement de clic sur le bouton.
toggleButton.addEventListener("click", onClickToggleLight);
