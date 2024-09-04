// 1. Création de l'objet 'person'
const person = {
	name: "Julie",
	age: 28,
	city: "Paris",
	hobby: "Photographie",
	profession: "Développeuse",
};

// 2. Fonction pour afficher les informations sur la page
function displayPersonInfo(personObj) {
	// Utilisation du destructuring pour extraire les valeurs
	const { name, age, city, hobby, profession } = personObj;

	// Utilisation des template literals pour formater le message
	const message = `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Âge :</strong> ${age} ans</p>
        <p><strong>Ville :</strong> ${city}</p>
        <p><strong>Loisir préféré :</strong> ${hobby}</p>
        <p><strong>Profession :</strong> ${profession}</p>
    `;

	// Sélectionner l'élément DOM et afficher le message
	const resultDiv = document.getElementById("result");
	resultDiv.innerHTML = message;
}

// 3. Fonction pour mettre à jour l'objet 'person' avec le spread operator
function updatePersonInfo() {
	// Création d'un nouvel objet avec les propriétés mises à jour
	const updatedPerson = {
		...person,
		profession: "Designer", // Modification de la profession
	};

	// Afficher les informations mises à jour
	displayPersonInfo(updatedPerson);
}

// 4. Ajouter des événements de clic aux boutons pour afficher les informations
document.getElementById("show-info").addEventListener("click", () => {
	displayPersonInfo(person); // Afficher les informations originales
});

document
	.getElementById("update-info")
	.addEventListener("click", updatePersonInfo); // Afficher les informations mises à jour
