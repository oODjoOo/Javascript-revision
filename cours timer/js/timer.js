// setInterval : Exécute une fonction de manière répétée à un intervalle de temps spécifié

let intervalId;
let counter = 0;

const startIntervalButton = document.getElementById("startInterval");
const stopIntervalButton = document.getElementById("stopInterval");
const intervalCount = document.getElementById("intervalCount");

// Fonction pour démarrer l'intervalle
startIntervalButton.addEventListener("click", function () {
	// setInterval appelle la fonction chaque seconde (1000 ms)
	intervalId = setInterval(() => {
		counter++;
		intervalCount.innerHTML = `Compteur: ${counter}`;
	}, 1000);
});

// Fonction pour arrêter l'intervalle
stopIntervalButton.addEventListener("click", function () {
	clearInterval(intervalId);
});

// setTimeout : Exécute une fonction une seule fois après un délai spécifié

const startTimeoutButton = document.getElementById("startTimeout");
const timeoutCount = document.getElementById("timeoutCount");

// Fonction pour démarrer le délai
startTimeoutButton.addEventListener("click", function () {
	timeoutCount.innerHTML = "En attente...";
	setTimeout(() => {
		timeoutCount.innerHTML = "Le délai de 3 secondes est écoulé";
	}, 3000);
});

// requestAnimationFrame : Utilisé pour créer des animations fluides en synchronisant l'exécution avec le rafraîchissement de l'écran

const animationBox = document.getElementById("animationBox");
let animationId;
let position = 0;
let animationRunning = false;

// Fonction pour animer la boîte
function animate() {
	if (position < 300) {
		position += 2;
		animationBox.style.left = `${position}px`;
		animationId = requestAnimationFrame(animate);
	}
}
// Démarre l'animation
document
	.getElementById("startAnimation")
	.addEventListener("click", function () {
		if (!animationRunning) {
			animationRunning = true;
			animate();
		}
	});

// Arrête l'animation
document.getElementById("stopAnimation").addEventListener("click", function () {
	cancelAnimationFrame(animationId);
	animationRunning = false;
});
