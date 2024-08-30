// Fonction pour générer un nombre aléatoire entre un min et un max
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Fonction pour créer une étoile
function createStar() {
    let star = document.createElement('div');
    star.classList.add('star');

    // Génération d'une taille aléatoire pour l'étoile
    let size = getRandomNumber(2, 10); // Taille des étoiles entre 2px et 10px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    console.log(star);
    // Position aléatoire de l'étoile dans la fenêtre
    let x = getRandomNumber(0, window.innerWidth);
    let y = getRandomNumber(0, window.innerHeight);
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    // Ajout de l'étoile au body
    document.body.appendChild(star);
}

// Écouteur d'événement de clic sur le document
document.addEventListener('click', () => {
    createStar();
});

