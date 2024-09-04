# Phrases avec localStorage

* Objectif :
Créez une page web simple qui permet d'afficher une liste de phrases stockées dans le localStorage. Vous devrez également permettre la suppression de ces phrases, avec les changements reflétés immédiatement dans le localStorage.

* Instructions :

  1. Structure HTML :

    - Créez une page HTML avec un titre, une section pour afficher la liste des phrases, et un message pour indiquer s'il n'y a pas de phrases disponibles.

   2. JavaScript :

    - Lorsque la page se charge, récupérez les phrases stockées dans le localStorage. Si aucune phrase n'est trouvée, utilisez un tableau de phrases par défaut.

    - Affichez la liste des phrases sur la page.

    - Ajoutez un bouton "Supprimer" à côté de chaque phrase. Lorsque ce bouton est cliqué, la phrase correspondante doit être supprimée de la liste affichée et du localStorage.

    - Assurez-vous que lorsque toutes les phrases sont supprimées, un message indiquant "Aucune phrase disponible." est affiché.

* Détails Techniques :

    - Utilisez `localStorage` pour stocker et récupérer les phrases.
    - Utilisez `JSON.stringify` pour convertir les données en chaîne JSON avant de les stocker.
    - Utilisez `JSON.parse` pour convertir les données JSON en tableau lors de la récupération.
    - Mettez à jour le `localStorage` chaque fois qu'une phrase est supprimée.

* Bonus :

Assurez-vous que le message "Aucune phrase disponible." s'affiche correctement lorsque toutes les phrases sont supprimées.

* Code HTML et JavaScript fourni :

Vous pouvez utiliser le code HTML et JavaScript de la précédente version de l'exercice. Assurez-vous d'adapter le code pour répondre aux exigences de l'exercice 👍





