// Éxécution au chargement du DOM
document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("quote-form");
	const quoteText = document.getElementById("quote-text");
	const authorName = document.getElementById("author-name");
	const quoteList = document.getElementById("quote-list");

	form.addEventListener("submit", function (event) {
		event.preventDefault(); // Empêche le rechargement de la page à la soumission du formulaire

		const text = quoteText.value;
		console.log(text);
		const author = authorName.value;

		if (text && author) {
			// Crée une carte pour la citation
			const card = document.createElement("div");
			card.classList.add("card");
			card.innerHTML = `
                <p>"${text}"</p>
                <p class="author">— ${author}</p>
            `;

			// Ajoute la carte à la liste
			quoteList.appendChild(card);

			// Réinitialise le formulaire
			quoteText.value = "";
			authorName.value = "";
		}
	});
});
