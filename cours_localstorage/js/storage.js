/* 
   Le localStorage permet de stocker des informations dans le navigateur de manière persistante.
   Les données restent disponibles même après la fermeture du navigateur, jusqu'à ce qu'elles soient explicitement supprimées.
*/

/* 
   On peut stocker des données de manière temporaire dans sessionStorage (valables jusqu'à la fermeture du navigateur) 
   ou de manière prolongée dans localStorage (persistant jusqu'à suppression manuelle ou vidage du cache).
*/

let nom = "Mercier";
let prenom = "Louca";

/*  
    Définition de valeurs dans le localStorage avec setItem.
    Cette méthode stocke les données sous forme de paires clé-valeur, où les deux paramètres doivent être des chaînes de caractères.
    Le navigateur conserve ces données même après sa fermeture.
*/

localStorage.setItem("nom", nom);
localStorage.setItem("prenom", prenom);

let getName = document.querySelector("#greetings strong");

getName.innerHTML = localStorage.getItem("job");

/* 
   Vérification de l'existence des données dans le localStorage. 
   Si elles existent, on les récupère. Sinon, on renvoie un message d'erreur.
*/

if (localStorage.nom && localStorage.prenom !== null) {
	getName.innerHTML = `${localStorage.getItem("nom")} ${localStorage.getItem(
		"prenom",
	)}`;
} else {
	getName.innerHTML = "Pas d'infos !";
}

/***************************************** VIA FORM ********************************************/
let valid = document.querySelector("#valid");
let deletBtn = document.querySelector("#delete");
let ageInput = document.querySelector("#age");
let jobInput = document.querySelector("#job");
let jobText = document.querySelector(".job");

/* 
   Explication des méthodes :
   - JSON.stringify(objet) : Cette méthode convertit un objet JavaScript en une chaîne de caractères JSON.
   - JSON.parse(string) : Cette méthode convertit une chaîne de caractères JSON en un objet JavaScript.
   
   Pourquoi utiliser ces méthodes ?
   Le localStorage ne peut stocker que des chaînes de caractères. Pour stocker des objets, il est nécessaire de 
   les convertir en chaînes avec JSON.stringify avant de les stocker. Ensuite, pour réutiliser les données stockées, 
   il faut les reconvertir en objets avec JSON.parse.
*/

function getIdentity() {
	let user = {
		age: ageInput.value,
		job: jobInput.value,
	};
	// console.log(document.querySelector("#age").value);
	// console.log(user);

	localStorage.setItem("user", JSON.stringify(user));
	console.log(user);
}

valid.addEventListener("click", getIdentity);

let userParse = localStorage.getItem("user");

// JS OBJECT
// let person = {
// 	name: "Luc",
// 	city: "Madrid",
// };

// LOCALSTORAGE DATA STRINGIFYED
// let person1 = {
// 	"name": "Luc",
// 	"city": "Madrid",
// };

// console.log(person1.name);

jobText.innerHTML = `Vous êtes ${userParse.job} et vous avez ${userParse.age} ans`;

jobText.innerHTML = "";

deletBtn.addEventListener("click", function (e) {
	e.preventDefault();
	localStorage.removeItem("user");
	jobText.innerHTML = "Les informations de l'utilisateur ont été supprimées !";
});
