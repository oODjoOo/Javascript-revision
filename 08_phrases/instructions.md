# Phrases

1ÈRE PARTIE
Dans votre script vous devrez mettre en place une série de phrases dans un tableau d'objets. Chaque phrase aura son id de type number; c'est à dire que chaque phrase sera numérotée.

<code>
const phrases = [
    { id: 0, text: "C'est une belle journée." },
    { id: 1, text: "J'aime apprendre de nouvelles choses." },
    { id: 2, text: "Le café est délicieux." },
    { id: 3, text: "Il fait beau aujourd'hui." },
    { id: 4, text: "Apprendre en groupe c'est fun !" },
];
</code>

Suite à cette création de tableau, faites en sortes d'afficher ces phrases sur la page web en créant une div qui aura pour class "sentence-item". Cette div contiendra les paragraphes qui afficheront les phrases.
De plus il faudra également un également qui indiquera que cette phrase est supprimable. Soit le mot "Supprimer" soit une croix "X".
Cet élément aura pour class "remove-button"

2ÈME PARTIE
Une fois la première étape faite, tenter de créer une fonction qui supprime une phrase quand on clique sur l'élément de suppression créé précédemment.
Attention il faut supprimer la phrase grâce à son id 👍