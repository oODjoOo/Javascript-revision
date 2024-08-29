array = [];

array.push("<ul><li>Ordinateur - 1000 € - Electronique</li>",
    "<li>Téléphone - 600€ - Electronique</li>",
    "<li>T-shirt - 20€ - Vêtements</li>",
    "<li>Jeans - 40€ - Vêtements</li>",
    "<li>Pantalon - 50€ - Vêtements</li></ul>"
);
let groupe = [
	{
		ordi: "Ordinateur - 1000 € - Electronique",
		tel: "Téléphone - 600€ - Electronique",
	},
	{
		tshirt: "T-shirt - 20€ - Vêtements",
		jeans: "Jeans - 40€ - Vêtements",
        pantalon:"Pantalon - 50€ - Vêtements",
	},
];

let Electronique = {
	ordi: "Ordinateur - 1000 € - Electronique",
	tel: "Téléphone - 600€ - Electronique",
};

let Vêtements = {
    tshirt: "T-shirt - 20€ - Vêtements",
	jeans: "Jeans - 40€ - Vêtements",
    pantalon:"Pantalon - 50€ - Vêtements",
};

document.write(array);


// document.write("<li>Ordinateur - 1000 € - Electronique</li>");
// document.write("<li>Téléphone - 600€ - Electronique");
// document.write("<li>T-shirt - 20€ - Vêtements</li>");
// document.write("<li>Jeans - 40€ - Vêtements</li>");
// document.write("<li>Pantalon - 50€ - Vêtements</li>");