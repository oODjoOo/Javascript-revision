# Récapitulatif méthodes timer

* Explications :

1. `setInterval`: Exécute une fonction de manière répétée toutes les X millisecondes.
2. `setTimeout`: Exécute une fonction une seule fois après X millisecondes.
3. `requestAnimationFrame`: Utilisé pour créer des animations fluides en synchronisant l'exécution avec le taux de   rafraîchissement de l'écran.
    - C'est plus performant que `setInterval` ou `setTimeout` pour les animations, car il adapte l'animation à la vitesse de l'écran.
