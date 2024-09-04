
// Fonction pour charger les traductions et changer la langue du site
function setLanguage(lang) {
	fetch("translations.json")
		.then((response) => response.json())
		.then((translations) => {
			console.log(translations);

			if (lang === "en") {
				// Met à jour le texte des éléments avec les traductions en anglais
				document.getElementById("title").innerHTML =
					translations.en.title || "";
				document.getElementById("subtitle").innerHTML =
					translations.en.subtitle || "";
				document.getElementById("cta-button").innerHTML =
					translations.en.ctaButton || "";
				document.getElementById("features-title").innerHTML =
					translations.en.featuresTitle || "";
				document.getElementById("feature1-title").innerHTML =
					translations.en.feature1Title || "";
				document.getElementById("feature1-desc").innerHTML =
					translations.en.feature1Desc || "";
				document.getElementById("feature2-title").innerHTML =
					translations.en.feature2Title || "";
				document.getElementById("feature2-desc").innerHTML =
					translations.en.feature2Desc || "";
				document.getElementById("feature3-title").innerHTML =
					translations.en.feature3Title || "";
				document.getElementById("feature3-desc").innerHTML =
					translations.en.feature3Desc || "";
				document.getElementById("about-title").innerHTML =
					translations.en.aboutTitle || "";
				document.getElementById("about-desc").innerHTML =
					translations.en.aboutDesc || "";
				document.getElementById("footer-text").innerHTML =
					translations.en.footerText || "";
			} else if (lang === "fr") {
				// Met à jour le texte des éléments avec les traductions en français
				document.getElementById("title").innerHTML =
					translations.fr.title || "";
				document.getElementById("subtitle").innerHTML =
					translations.fr.subtitle || "";
				document.getElementById("cta-button").innerHTML =
					translations.fr.ctaButton || "";
				document.getElementById("features-title").innerHTML =
					translations.fr.featuresTitle || "";
				document.getElementById("feature1-title").innerHTML =
					translations.fr.feature1Title || "";
				document.getElementById("feature1-desc").innerHTML =
					translations.fr.feature1Desc || "";
				document.getElementById("feature2-title").innerHTML =
					translations.fr.feature2Title || "";
				document.getElementById("feature2-desc").innerHTML =
					translations.fr.feature2Desc || "";
				document.getElementById("feature3-title").innerHTML =
					translations.fr.feature3Title || "";
				document.getElementById("feature3-desc").innerHTML =
					translations.fr.feature3Desc || "";
				document.getElementById("about-title").innerHTML =
					translations.fr.aboutTitle || "";
				document.getElementById("about-desc").innerHTML =
					translations.fr.aboutDesc || "";
				document.getElementById("footer-text").innerHTML =
					translations.fr.footerText || "";
			} else {
				console.error("Langue non trouvée :", lang);
			}

			// Mettre à jour l'attribut lang dans la balise HTML
			document.documentElement.lang = lang;

			localStorage.setItem("lang", lang); // Sauvegarde la langue choisie
		})
		.catch((error) => {
			console.error("Erreur lors du chargement des traductions :", error);
		});
}

// Lors du chargement de la page, on vérifie la langue sauvegardée et on l'applique
document.addEventListener("DOMContentLoaded", function () {
	const savedLang = localStorage.getItem("lang") || "fr"; // Langue par défaut: français
	setLanguage(savedLang);
});






// // // localStorage.clear();

// let translations = `translations.json`;
// // function setLanguagefr() {
// //     fetch(translations)
// //     .then((res) => res.json())
// //     .then((res) => {
// //     localStorage.setItem(translations, "fr");
// //     localStorage.getItem(translations, "fr");
// //     console.log(res);
// //     });
// //     // setLanguage();
// // }
// en.addEventListener("click",setLanguage);
// function setLanguageEn() {
//     fetch(translations)
//     .then((res) => res.json())
//     .then((res) => {
//     localStorage.setItem(translations, "en");
//     localStorage.getItem(translations, "en");
//     console.log(res);
//     });
//     setLanguageEn();
// }
// // en.addEventListener("click",setLanguage);
// // setLanguageFr();

