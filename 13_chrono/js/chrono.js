// Attend que le contenu de la page soit complètement chargé
document.addEventListener("DOMContentLoaded", function () {
	// Sélection des éléments du DOM par leur ID
	const timerDisplay = document.getElementById("timer");
	const startButton = document.getElementById("start");
	const stopButton = document.getElementById("stop");
	const resetButton = document.getElementById("reset");

	let timer; // Variable pour stocker l'intervalle de temps
	let timeElapsed = 0; // Temps écoulé en secondes
	let isRunning = false; // Indique si le chronomètre est en cours d'exécution

	// Fonction pour mettre à jour l'affichage du chronomètre
	function updateDisplay() {
		// Division du temps écoulé par 60 pour obtenir le nombre total de minutes
		const minutes = Math.floor(timeElapsed / 60);
		/* On cherche à savoir combien de secondes il reste après l'obtention du nombre de
		 minutes écoulées */
		const seconds = timeElapsed % 60;

		// Formate les minutes et les secondes pour qu'ils aient toujours 2 chiffres
		let minutesStr;
		let secondsStr;

		if (minutes < 10) {
			minutesStr = "0" + minutes;
		} else {
			minutesStr = minutes;
		}

		if (seconds < 10) {
			secondsStr = "0" + seconds;
		} else {
			secondsStr = seconds;
		}

		timerDisplay.textContent = minutesStr + ":" + secondsStr;

		// Version ternaire
		// const minutesStr = minutes < 10 ? "0" + minutes : minutes;
		// const secondsStr = seconds < 10 ? "0" + seconds : seconds;

		timerDisplay.textContent = `${minutesStr}:${secondsStr}`;
	}

	// Fonction pour démarrer le chronomètre
	function startTimer() {
		if (isRunning) return; // Si le chronomètre est déjà en cours d'éxécution, ne fait rien
		isRunning = true;

		timer = setInterval(() => {
			timeElapsed++; // Incrémente le temps écoulé chaque seconde
			updateDisplay(); // Met à jour l'affichage
		}, 1000);
	}

	// Fonction pour arrêter le chronomètre
	function stopTimer() {
		clearInterval(timer); // Arrête l'incrémentation du temps
		isRunning = false; // Indique que le chronomètre est arrêté
	}

	// Fonction pour réinitialiser le chronomètre
	function resetTimer() {
		stopTimer(); // Arrête le chronomètre
		timeElapsed = 0; // Réinitialise le temps écoulé
		updateDisplay(); // Met à jour l'affichage pour montrer 00:00
	}

	// Ajout des événements de clic aux boutons
	startButton.addEventListener("click", startTimer);
	stopButton.addEventListener("click", stopTimer);
	resetButton.addEventListener("click", resetTimer);

	// Affichage initial du chronomètre à 00:00
	updateDisplay();
});






// let intervalId;
// let counter = 0;
// let timer = document.getElementById("timer");
// let startbutt = document.getElementById("start");
// let stopbutt = document.getElementById("stop");
// let resetbutt = document.getElementById("reset");

// startbutt.addEventListener("click", function () {

//     intervalId = setInterval(() => {
// 		counter++;
// 		timer.innerHTML = `Compteur: ${counter}`;
// 	}, 1000);
// });

// // Fonction pour arrêter l'intervalle

// stopbutt.addEventListener("click", function () {
// 	clearInterval(intervalId);
// });

// console.log(startbutt);




//   // secondes écoulées
//   let secondes = 0;

//   // élément où afficher le décompte
//   let para = document.getElementById("timer");

//   // lance l'exécution de la fonction à toutes les secondes
//   let chrono = window.setInterval(tictictic, 1000);

//   // ---------------------------------------------------------
//   // Incrément le nombre de secondes, affiche cette quantité
//   // et arrête automatiquement après une minute.
//   // ---------------------------------------------------------
//   function tictictic() {
//     secondes++;
//     para.innerHTML = secondes;
//     if (secondes == 60) {
//       // arrête l'exécution lancée par setInterval()
//       window.clearTimeout(chrono);
//     }
//   };

  

















// // Sélection des éléments du DOM
// document.addEventListener('DOMContentLoaded', function () {
//     const timerDisplay = document.getElementById('timer');
//     const startButton = document.getElementById('start');
//     const stopButton = document.getElementById('stop');
//     const resetButton = document.getElementById('reset');

//     // Variables pour le temps écoulé et l'intervalle
//     let elapsedTime = 0; // Temps en secondes
//     let intervalId = null;

//     // Fonction pour formater le temps en mm:ss
//     function formatTime(timeInSeconds) {
//         const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
//         const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
//         return `${minutes}:${seconds}`;
//     }

//     // Fonction pour mettre à jour l'affichage du chronomètre
//     function updateDisplay() {
//         timerDisplay.textContent = formatTime(elapsedTime);
//     }

//     // Fonction pour démarrer le chronomètre
//     function startTimer() {
//         if (!intervalId) {
//             intervalId = setInterval(() => {
//                 elapsedTime++;
//                 updateDisplay();
//             }, 1000);
//         }
//     }

//     // Fonction pour arrêter le chronomètre
//     function stopTimer() {
//         clearInterval(intervalId);
//         intervalId = null;
//     }

//     // Fonction pour réinitialiser le chronomètre
//     function resetTimer() {
//         stopTimer();
//         elapsedTime = 0;
//         updateDisplay();
//     }

//     // Écouteurs d'événements pour les boutons
//     startButton.addEventListener('click', startTimer);
//     stopButton.addEventListener('click', stopTimer);
//     resetButton.addEventListener('click', resetTimer);

//     // Afficher le temps initial au chargement de la page
//     updateDisplay();
// });