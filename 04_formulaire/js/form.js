const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
	event.preventDefault();

	// Réinitialisation des messages
	document.getElementById("errorMsg").innerHTML = "";
	document.getElementById("successMsg").innerHTML = "";

	// Récupération des valeurs du formulaire
	let nom = document.getElementById("nom").value;
	let age = document.getElementById("age").value;
	let motDePasse = document.getElementById("password").value;

	// Validation du nom
	if (nom === "") {
		document.getElementById("errorMsg").innerHTML =
			"Le nom ne doit pas être vide.";
		return false;
	}

	// Validation de l'âge
	age = parseInt(age); // Convertir la chaîne en nombre entier
	if (isNaN(age) || age < 18 || age > 120) {
		document.getElementById("errorMsg").innerHTML =
			"L'âge doit être un nombre entre 18 et 120.";
		return false;
	}

	// Validation du mot de passe avec Regex
	/**
	 * Regex (Expression régulière) :
	 * Un Regex est un modèle qui décrit une chaîne de caractères.
	 * Il est souvent utilisé pour valider des formats spécifiques comme les adresses email, les numéros de téléphone, ou les mots de passe.
	 * Ici, nous utilisons un regex pour vérifier que le mot de passe contient au moins 8 caractères, une majuscule, une minuscule, un chiffre, et un caractère spécial.
	 * Pour plus d'informations sur les regex : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Regular_Expressions
	 */
	const motDePasseRegex =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
	if (!motDePasseRegex.test(motDePasse)) {
		document.getElementById("errorMsg").innerHTML =
			"Le mot de passe doit contenir au moins 8 caractères, avec une majuscule, une minuscule, un chiffre, et un caractère spécial.";
		return false;
	}

	// Si tout est valide
	document.getElementById("successMsg").innerHTML =
		"Formulaire validé avec succès !";
	return true;
});
