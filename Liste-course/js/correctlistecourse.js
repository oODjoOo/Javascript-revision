let shoppingList = [];
let addArticles;

do {
	// On demande à l'utilisateur de saisir
	let article = prompt(
		"Entrez un article à ajouter dans votre liste de courses: ",
	);

	// Ajouter un article au tableau si l'utilisateur clique sur ok
	if (article) {
		shoppingList.push(article);
	}

	// On demande à l'utilisateur s'il souhaite ajouter un autre article
	addArticles =
		prompt(
			"Souhaitez-vous ajouter un autre article ? (oui/non) ",
		).toLowerCase() === "oui";
} while (addArticles);

console.log(shoppingList);

// Affiche de la liste s'il y a des articles dans le tableau
if (shoppingList.length > 0) {
	document.getElementById(
		"list",
	).innerHTML = `<p><strong>Votre liste de courses est: </strong> ${shoppingList}</p>`;
} else {
	// Sinon le tableau est vide (soit égal à zéro)
	document.getElementById(
		"list",
	).innerHTML = `Votre liste de courses est vide !`;
}
