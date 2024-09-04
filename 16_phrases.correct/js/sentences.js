document.addEventListener("DOMContentLoaded", () => {
	const phrases = [
		{ id: 0, text: "C'est une belle journée." },
		{ id: 1, text: "J'aime apprendre de nouvelles choses." },
		{ id: 2, text: "Le café est délicieux." },
		{ id: 3, text: "Il fait beau aujourd'hui." },
		{ id: 4, text: "Apprendre en groupe c'est fun !" },
	];

	const storedPhrases = JSON.parse(localStorage.getItem("phrases"));
	console.log(storedPhrases);

	const phraseList = document.getElementById("sentences-list");
	const noSentencesMsg = document.getElementById("no-sentences");

	function savePhrases() {
		localStorage.setItem("phrases", JSON.stringify(phrases));
	}

	// Fonction pour afficher les phrases
	function displaySentences() {
		phraseList.innerHTML = ""; // Remise à zéro du contenu actuel

		if (phrases.length === 0) {
			noSentencesMsg.textContent = "Aucune phrase disponible.";
			return;
		}

		phrases.map((phrase, index) => {
			const div = document.createElement("div");
			div.classList.add("sentence-item");
			div.innerHTML = `
                <p>${phrase.text}</p>
                <span class="remove-button">Supprimer</span>
            `;
			phraseList.appendChild(div);

			// Ajoute l'événement de suppression au bouton
			div.querySelector(".remove-button").addEventListener("click", () => {
				removePhrase(index);
			});
		});
	}

	// Fonction pour supprimer une phrase
	const removePhrase = (index) => {
		phrases.splice(index, 1); // Supprime la phrase du tableau
		displaySentences(); // Réaffiche les phrases
		savePhrases();
	};

	// Affiche les phrases initialement
	displaySentences();
});
