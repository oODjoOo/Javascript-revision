# Site multilingue

Dans cet exercice, vous allez apprendre à utiliser JavaScript pour ajouter une fonctionnalité multilingue à un site web. Le HTML et le CSS sont déjà fournis, et votre tâche consistera uniquement à ajouter le JavaScript nécessaire pour changer la langue du site en fonction du choix de l'utilisateur.

* Objectifs
Apprendre à utiliser fetch pour charger des données depuis un fichier JSON.
Manipuler le DOM pour changer le texte d'une page en fonction de la langue sélectionnée.
Utiliser localStorage pour sauvegarder la langue choisie par l'utilisateur.

## Étapes à suivre

1. Créer la structure des fichiers
Vous allez travailler avec les fichiers suivants :

- `index.html` : Le fichier HTML fourni.
- `multilingue.css` : Le fichier CSS fourni.
- `multilingue.js` : Le fichier JavaScript que vous allez écrire.
- `translations.json` : Le fichier JSON contenant les traductions.

2. Créer le fichier JSON pour les traductions (translations.json)
Voici le début du fichier JSON que vous devez créer dans votre projet. Ce fichier contient les textes en français pour le moment, ajoutez la partie en anglais:

<code>
{
    "fr": {
        "title": "Bienvenue sur notre site",
        "subtitle": "Votre porte d'entrée vers une expérience incroyable",
        "ctaButton": "En savoir plus",
        "featuresTitle": "Nos caractéristiques",
        "feature1Title": "Design moderne",
        "feature1Desc": "Profitez d'un design à la pointe de la technologie.",
        "feature2Title": "Responsive",
        "feature2Desc": "Notre site s'adapte à tous vos appareils.",
        "feature3Title": "Facile à utiliser",
        "feature3Desc": "Une interface intuitive pour une expérience agréable.",
        "aboutTitle": "À propos de nous",
        "aboutDesc": "Nous sommes une équipe passionnée par la création de sites web performants et esthétiques.",
        "footerText": "© 2024 - Tous droits réservés. Mentions légales"
    }
}
</code>

3. Ajouter la logique JavaScript (multilingue.js)
Maintenant, c'est à vous de jouer ! Vous allez écrire le fichier `multilingue.js` pour ajouter la fonctionnalité multilingue. Suivez ces étapes :

- Charger les traductions : Utilisez `fetch` pour charger les traductions depuis `translations.json`.

- Changer la langue : Créez une fonction `setLanguage` qui met à jour le texte sur la page en fonction de la langue choisie.

- Sauvegarder la langue : Utilisez `localStorage` pour sauvegarder la langue choisie par l'utilisateur, afin que cette langue soit retenue lors de ses prochaines visites.

4. Tester votre site
- Ouvrez index.html dans votre navigateur.
- Essayez de changer la langue en cliquant sur les boutons Français et English.
- Vérifiez que tous les textes changent en conséquence.

