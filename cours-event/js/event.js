// ---- 1. Événement de clic -----

let clickBtn = document.getElementById("clickBtn");
let output = document.getElementById("output");

function clickBTN() {
	output.innerHTML = "Bouton cliqué";
}
clickBtn.addEventListener("click", clickBTN);

// ---- 2. Événement de survol (mouse over) -----

let hoverBtn = document.getElementById("hoverBtn");

hoverBtn.addEventListener("mouseover", function () {
	output.innerHTML = "Bouton survolé";
});

// ---- 3. Événement de focus (focus) -----

let focusBtn = document.getElementById("focusBtn");

focusBtn.addEventListener("focus", function () {
	document.querySelector("input").style.border = "2px solid red";
	output.innerHTML = "Bouton focusé";
});

// ---- 4. Événement d'entrée de texte (input) -----

let inputField = document.getElementById("inputField");

inputField.addEventListener("input", function () {
	output.innerHTML = `Vous avez tapé: ${inputField.value}`;
});

// ---- 5. Événement au clavier (keydown) -----
document.addEventListener("keydown", function (event) {
	output.innerHTML = `Touche pressée: ${event.code}`;

	if (event.code === "Space") {
		output.innerHTML = "Youpiiii vous avez trouvé  la bonne touche";
	}
});

// Ajout d'un événement au clavier sur le document entier

// ---- 6. Supprimer un gestionnaire d'événement -----

setTimeout(() => {
	clickBtn.removeEventListener("click", clickBTN);
	output.innerHTML = "Suppression après 3 secondes";
}, 3000);

// Suppression du gestionnaire d'événement après un certain temps

// ---- 7. Événement au chargement de la page -----
/* Cet événement se déclenche après le chargement complet de la page, y compris toutes les ressources 
    externes comme les images, les styles CSS et les scripts.
*/
window.addEventListener("load", function () {
	output.innerHTML = "La page est chargée";
});

// ---- 8. Événement au chargement du DOM -----

/* Cet événement se déclenche lorsque le DOM (Document Object Model) est complètement chargé et analysé,
    c'est-à-dire que tous les éléments HTML sont accessibles et peuvent être manipulés par JavaScript.
*/
document.addEventListener("DOMContentLoaded", function () {
	output.innerHTML = "Le DOM est chargé";
});
