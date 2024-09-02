# Chronomètre

Créez un chronomètre en JavaScript qui mesure le temps écoulé en minutes et secondes. Le chronomètre doit inclure les fonctionnalités suivantes :

1. Affichage du Temps : Le temps écoulé doit être affiché sous forme de minutes et secondes.

2. Boutons de Contrôle :
    - Un bouton "Start" pour démarrer le chronomètre.
    - Un bouton "Stop" pour arrêter le chronomètre.
    - Un bouton "Reset" pour réinitialiser le chronomètre à 00:00.

3. Comportement du Chronomètre :
     - Le bouton "Start" doit démarrer le chronomètre à partir du temps où il a été arrêté (pas de redémarrage à 00:00 sauf si réinitialisé).
    - Le bouton "Reset" doit réinitialiser le chronomètre à 00:00 et arrêter le temps écoulé.

* Instructions : Utilisez les événements click pour contrôler le démarrage, l'arrêt et la réinitialisation du chronomètre. Utilisez setInterval pour incrémenter le temps toutes les secondes et clearInterval pour arrêter l'incrémentation.

* Objectifs pédagogiques :
    - Manipuler les événements du DOM.
    - Utiliser setInterval et clearInterval pour mesurer le temps écoulé.
    - Gérer et formater l'affichage du temps avec JavaScript.

* Indication : Commencez par créer des variables pour stocker le temps écoulé en secondes et un intervalle de temps pour incrémenter ce temps chaque seconde. Assurez-vous de formater les minutes et les secondes pour qu'ils aient toujours deux chiffres.