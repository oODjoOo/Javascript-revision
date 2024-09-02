// Date de fin
const countdownDate = new Date("Sept 2, 2024 12:07:00").getTime();

// Met à jour le compte à rebours chaque seconde
const countdownInterval = setInterval(function () {
	// Récupère la date et l'heure actuelles
	const now = new Date().getTime();

	// Calcule la différence de temps entre la date cible et maintenant
	const timeRemaining = countdownDate - now;

	// Calcul des jours, heures, minutes et secondes restants
	const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
	);
	const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

	// Affiche le compte à rebours dans le div avec l'id "countdown"
	document.getElementById(
		"countdown",
	).innerHTML = `${days} jours ${hours} heures ${minutes} minutes ${seconds} secondes`;

	// Si le compte à rebours est terminé
	if (timeRemaining < 0) {
		clearInterval(countdownInterval); // Arrête le compte à rebours
		document.getElementById("countdown").innerHTML = "Redirection...";

		// Redirige vers une autre page
		window.location.href = "done.html";
	}
}, 1000);
