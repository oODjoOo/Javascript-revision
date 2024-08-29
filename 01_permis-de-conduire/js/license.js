// Demander l'âge de l'utilisateur
let age = parseInt(prompt("Quel est votre âge ?"));

// Demander si l'utilisateur a un permis de conduire
let hasALicense =
	prompt("Avez-vous un permis de conduire ? (oui/non)").toLowerCase() === "oui";
let message = "";

if (age > 18 && hasALicense) {
	message = "Peut conduire";
} else if (age > 18 && !hasALicense) {
	message = "N'a pas le permis pour conduire";
} else {
	message = "Trop jeune";
}

// Affiche le message dans l'élément avec l'ID "message"
document.getElementById("message").innerHTML = message;
