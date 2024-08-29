function chooseMeal(option) {
	let message = "";

	switch (option) {
		case 1:
			message = "Vous avez choisi une délicieuse pizza !";
			break;
		case 2:
			message = "Les pâtes sont un excellent choix !";
			break;
		case 3:
			message = "Une salade, c'est toujours frais et sain !";
			break;
		case 4:
			message = "Les sushis sont parfaits pour une touche asiatique !";
			break;
		default:
			message = "Désolé, ce plat n'est pas au menu.";
	}
	document.getElementById("message").innerHTML = message;
}
