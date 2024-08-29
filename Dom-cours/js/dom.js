/* Attendre que le DOM soit complètement chargé avant d'exécuter le script quand le lien du script
	est placé dans le head
*/
document.addEventListener("DOMContentLoaded", function () {
	// SECTION 1 : SÉLECTION DES ÉLÉMENTS DU DOM

	// Sélection d'un élément par son ID
	let title = document.getElementById("title");
	console.log(title);

	// Sélection d'un élément par son nom de balise (le premier élément correspondant est sélectionné)
	let title2 = document.querySelector("h1");
	console.log(title2);

	// Sélection du dernier élément <li> dans la liste
	let liste = document.querySelector("li:last-child");
	console.log(liste);

	// Sélection de tous les éléments <li> sous forme de NodeList
	let liste2 = document.querySelectorAll("li");
	console.log(liste2);

	/************************************************************************/

	// SECTION 2 : MANIPULATION DU CONTENU HTML ET TEXTUEL

	// Sélection du premier élément <div>
	let div = document.querySelector("div");
	console.log(div);

	// Modification du contenu HTML interne (en remplaçant tout le contenu)
	// div.innerHTML = "Hello vous !!!";

	// // Modification du texte interne (remplace le texte uniquement)
	// div.innerText = "Heeeeeeeeey !!!!";

	/************************************************************************/

	// SECTION 3 : MODIFICATION DES STYLES

	// Fonction pour modifier les styles directement via JavaScript
	function modifier() {
		title.style.color = "red";
		title.style.backgroundColor = "black";
		title.style.padding = "10px";
	}
	modifier(); // Appel de la fonction pour appliquer les styles

	// Ajouter et retirer des classes CSS définies dans un fichier CSS
	function modifierCSS() {
		liste.classList.add("modif"); // Ajoute la classe "modif"
	}

	modifierCSS();

	function modifierCSS2() {
		liste.classList.remove("modif"); // Retire la classe "modif"
	}

	modifierCSS2();

	/************************************************************************/

	// SECTION 4 : INTERACTION AVEC LE DOM

	// Fonction pour afficher/masquer le div
	function disappear() {
		if (div.style.display === "block") {
			div.style.display = "none"; // Réaffiche le div{
		} else {
			div.style.display = "block"; // Cache le div
		}
	}
	disappear();

	/************************************************************************/

	// SECTION 5 : CRÉATION ET AJOUT D'ÉLÉMENTS DANS LE DOM

	// Sélection des boutons
	let button1 = document.querySelector("#add");
	let button2 = document.querySelector("#delete");

	// Ajout d'un événement click sur le bouton d'ajout
	button1.addEventListener("click", function () {
		// Créer un nouvel élément <li>
		let newListItem = document.createElement("li");

		// Ajouter du texte à ce nouvel élément
		newListItem.innerText = "Nouvel Élément";

		// Ajouter cet élément à la fin de la liste <ul>
		let ul = document.querySelector("ul");
		ul.appendChild(newListItem);
	});

	/************************************************************************/

	// SECTION 6 : SUPPRESSION D'ÉLÉMENTS DU DOM

	// Ajout d'un événement click sur le bouton de suppression
	button2.addEventListener("click", function () {
		// Sélectionner le dernier élément <li> de la liste
		let lastListItem = document.querySelector("ul li:last-child");

		// Supprimer cet élément du DOM
		if (lastListItem) {
			lastListItem.remove();
		} else {
			alert("Aucun élément à supprimer !");
		}
	});

	// textContent permet aussi de faire des comparaisons !
	let para = document.getElementById("text");
	if (para.textContent === "Hello !") {
		para.style.color = "yellow";
	}

	// On peut également modifier dynamiquement les attributs html en js
	let img = document.querySelector("img");
	img.src = "img/img.jpg";
	img.alt = "Description de l'image";
});
