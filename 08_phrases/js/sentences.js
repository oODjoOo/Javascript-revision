
// document.addEventListener("DOMContentLoaded", function () {

// const phrases = [
//     { id: 0, text: "C'est une belle journée." },
//     { id: 1, text: "J'aime apprendre de nouvelles choses." },
//     { id: 2, text: "Le café est délicieux." },
//     { id: 3, text: "Il fait beau aujourd'hui." },
//     { id: 4, text: "Apprendre en groupe c'est fun !" },
// ];

// document.getElementById("sentence-item").innerHTML = text;

// console.log(phrases);

// });

// ----------------------------------------------------------------------------

// document.addEventListener("DOMContentLoaded", function () {
// 	// Tableau d'objets avec les phrases
// 	const phrases = [
// 		{ id: 0, text: "C'est une belle journée." },
// 		{ id: 1, text: "J'aime apprendre de nouvelles choses." },
// 		{ id: 2, text: "Le café est délicieux." },
// 		{ id: 3, text: "Il fait beau aujourd'hui." },
// 		{ id: 4, text: "Apprendre en groupe c'est fun !" },
// 	];

// 	let phrasesList = document.getElementById("sentences-list");

// 	function displaySentences() {
// 		for (let i = 0; i < phrases.length; ++i) {
// 			const div = document.createElement("div");
// 			div.classList.add("sentence-item");
// 			div.innerHTML = `
// 		        <p>${phrases[i].text}</p>
// 		        <span class="remove-button">Supprimer</span>
// 		        `;
// 			phrasesList.appendChild(div);
// 		}
//     }
// ---------------------------------------------------------------------------
		// Méthode map()
		// phrases.map((phrase, id) => {
		// 	const div = document.createElement("div");
		// 	div.classList.add("sentence-item");
		// 	div.innerHTML = `
		//         <p>${phrase.text}</p>
		//         <span class="remove-button">Supprimer</span>
		//         `;
		// 	phrasesList.appendChild(div);
		// });
        // ---------------------------------------------------------------------

	

// 	displaySentences();

//     const removeButtons = document.querySelectorAll(".remove-button");
//     removeButtons.forEach(button => {
//         button.addEventListener("click", removeSentence);
//     });

// });

// Chatgrp------
// document.addEventListener("DOMContentLoaded", function () {
//     // Tableau d'objets avec les phrases
//     const phrases = [
//         { id: 0, text: "C'est une belle journée." },
//         { id: 1, text: "J'aime apprendre de nouvelles choses." },
//         { id: 2, text: "Le café est délicieux." },
//         { id: 3, text: "Il fait beau aujourd'hui." },
//         { id: 4, text: "Apprendre en groupe c'est fun !" },
//     ];

//     let phrasesList = document.getElementById("sentences-list");

//     function displaySentences() {
//         // Vider la liste avant d'ajouter les phrases
//         phrasesList.innerHTML = "";

//         for (let i = 0; i < phrases.length; ++i) {
//             const div = document.createElement("div");
//             div.classList.add("sentence-item");
//             div.setAttribute("data-id", phrases[i].id); // Ajout de l'attribut data-id
//             div.innerHTML = `
//                 <p>${phrases[i].text}</p>
//                 <span class="remove-button">Supprimer</span>
//             `;
//             phrasesList.appendChild(div);
//         }

//         // Ajout des écouteurs d'événements pour les boutons de suppression
//         const removeButtons = document.querySelectorAll(".remove-button");
//         removeButtons.forEach(button => {
//             button.addEventListener("click", removeSentence);
//         });
//     }

//     function removeSentence(event) {
//         const sentenceItem = event.target.closest(".sentence-item");
//         const idToRemove = parseInt(sentenceItem.getAttribute("data-id"));

//         // Trouver l'index de la phrase dans le tableau
//         const index = phrases.findIndex(phrase => phrase.id === idToRemove);

//         if (index !== -1) {
//             // Supprimer la phrase du tableau
//             phrases.splice(index, 1);

//             // Mettre à jour l'affichage
//             displaySentences();
//         }
//     }

//     // Afficher les phrases initialement
//     displaySentences();
// });


// Le script s'éxécute au chargement complet du DOM
document.addEventListener("DOMContentLoaded", () => {
	// Tableau d'objets avec les phrases
	const phrases = [
		{ id: 0, text: "C'est une belle journée." },
		{ id: 1, text: "J'aime apprendre de nouvelles choses." },
		{ id: 2, text: "Le café est délicieux." },
		{ id: 3, text: "Il fait beau aujourd'hui." },
		{ id: 4, text: "Apprendre en groupe c'est fun !" },
	];

	const phraseList = document.getElementById("sentences-list");

	// Fonction pour afficher les phrases
	function displaySentences() {
		phraseList.innerHTML = ""; // Remise à zéro du contenu actuel, on évite les conflits avec le contenu précédent

		for (let i = 0; i < phrases.length; ++i) {
			console.log(i);

			const div = document.createElement("div");
			div.classList.add("sentence-item");
			div.innerHTML = `
                <p>${phrases[i].text}</p>
                <span class="remove-button">Supprimer</span>
            `;
			phraseList.appendChild(div);

			// Ajoute l'événement de suppression au bouton
			div
				.querySelector(".remove-button")
				.addEventListener("click", function () {
					removePhrase(i);
					console.log(i);
				});
		}

		// Méthode map()
		// phrases.map((phrase, id) => {
		// 	const div = document.createElement("div");
		// 	div.classList.add("sentence-item");
		// 	div.innerHTML = `
		//         <p>${phrase.text}</p>
		//         <span class="remove-button">Supprimer</span>
		//     `;
		// 	phraseList.appendChild(div);

		// 	// Ajoute l'événement de suppression au bouton
		// 	div.querySelector(".remove-button").addEventListener("click", () => {
		// 		removePhrase(id);
		// 	});
		// });
	}

	// Fonction pour supprimer une phrase
	function removePhrase(id) {
		phrases.splice(id, 1); // Supprime la phrase du tableau
		displaySentences(); // Réaffiche les phrases après suppression d'une phrase
	}

	// Affiche les phrases initialement
	displaySentences();
});
