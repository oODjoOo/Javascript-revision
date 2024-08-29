// Sélection du formulaire et du champ email
const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error-message");
const btn = document.getElementById("btn");

let regex = /[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+/i;

emailForm.addEventListener("submit", function (event) {
	event.preventDefault();

	const emailValue = emailInput.value;

	console.log(emailValue);

	if (regex.test(emailValue)) {
		alert("L'email est validé. Formulaire envoyé avec succès !");
	}
	errorMsg.innerHTML = "Veuillez entrer un email valide !";
	errorMsg.style.display = "block";
});

// function submission() {
//     const emailValue = emailInput.value;

// 	console.log(emailValue);

// 	if (regex.test(emailValue)) {
// 		alert("L'email est validé. Formulaire envoyé avec succès !");
// 	}
// 	errorMsg.innerHTML = "Veuillez entrer un email valide !";
// 	errorMsg.style.display = "block";
// }

// btn.addEventListener("click", submission);
