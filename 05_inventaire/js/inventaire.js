// Tableau d'objets représentant les produits
const produits = [
	{ product: "Ordinateur", price: 1000, category: "Electronique" },
	{ product: "Téléphone", price: 600, category: "Electronique" },
	{ product: "T-shirt", price: 20, category: "Vêtements" },
	{ product: "Jeans", price: 40, category: "Vêtements" },
	{ product: "Pantalon", price: 50, category: "Vêtements" },
];

// Fonction pour afficher l'inventaire
function displayInventory(productsToDisplay) {
	let inventoryHTML = "<ul>";
	for (let i = 0; i < productsToDisplay.length; i++) {
		inventoryHTML += `<li>${productsToDisplay[i].product} - ${productsToDisplay[i].price}€ - ${productsToDisplay[i].category}</li>`;
	}
	inventoryHTML += "</ul>";
	document.getElementById("inventaire").innerHTML = inventoryHTML;
}

// Fonction pour filtrer les produits par catégorie
function filtrerParCategorie(category) {
	let productsFiltered = [];
	for (let i = 0; i < produits.length; i++) {
		if (produits[i].category === category) {
			productsFiltered.push(produits[i]);
		}
	}
	return productsFiltered;
}

// Fonction pour afficher tous les produits
function allProducts() {
	displayInventory(produits);
}

// Fonction pour afficher les produits par catégorie
function productsByCategory(category) {
	let productsFiltered = filtrerParCategorie(category);
	displayInventory(productsFiltered);
}

// Initialiser l'affichage en montrant tous les produits
allProducts();