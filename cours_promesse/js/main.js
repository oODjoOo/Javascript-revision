/******************  MÉTHODE AVEC FETCH SANS ASYNC/AWAIT *******************/
const results = document.querySelector("#jokes-results");
const btn = document.querySelector("#jokes-btn");

let url = "https://api.chucknorris.io/jokes/random";

fetch(url)
	.then((res) => {
		console.log(res);
		return res.json();
	})
	.then((data) => {
		console.log(data);
		results.innerHTML = `<img src=${data.icon_url} alt="chuck" />
                                 <p>${data.value}</p>`;
	})
	.catch((err) => console.error(err));

/******************  MÉTHODE AVEC FETCH AVEC ASYNC/AWAIT *******************/

// Création d'une fonction asynchrone pour gérer la récupération des datas de l'API

async function getJokes() {
	// bloc try catch afin de mieux gérer d'éventuelles erreurs
	try {
		// en attente de la réponse de la requête fetch
		const response = await fetch(url);
		console.log(response);

		// on a récupéré une réponse, on est dans l'attente de la conversion de la
		// réponse en json
		let res = await response.json();
		console.log(res);

		// si le statut de la réponse est un succès (soit code 200)
		if (response.status === 200) {
			// alors on renvoit la réponse
			return res;
			// sinon on envoie une erreur avec le message voulu
		} else {
			throw new Error("Erreur de récupération des données");
		}
	} catch (error) {
		// renvoit de l'erreur si le bloc try n'est pas un succès
		console.error(error);
	}
}

// Création d'une fonction pour consommer les données de l'API (affichage sur la page)
function readJokes() {
	// appel de la fonction qui contient la donnée
	getJokes().then(
		(res) =>
			(results.innerHTML = `<img src=${res.icon_url} alt="chuck" />
                                 <p>${res.value}</p>`),
	);
}

readJokes();

/******************  MÉTHODE AVEC PROMESSES *******************/
// On fait une requête où javascript promet de renvoyer notre data quand elle aura été modifiée
// Peu importe le résultat de cette dernière.
// Soit notre requête est terminée et réussie dans ce cas on appelle la méthode resolve()
// soit elle est terminée mais est un échec donc on fera appel à la méthode reject();
// Attention jamais de await dans le constructeur Promise.

async function getJokes() {
	// création de l'objet Promise qui utise les méthodes resolve et reject
	return new Promise((resolve, reject) => {
		fetch(url)
			.then((response) => {
				console.log(response);
				return response.json().then((res) => {
					// si on a une réponse on la récupère dans le resolve
					if (response.status === 200) {
						resolve(res);
					} else {
						// sinon on récupère l'échec dans le reject
						reject(new Error("Erreur de récupération des données"));
					}
				});
			})
			.catch((error) => {
				//console.error(error);
				reject(error);
			});
	});
}

function readJokes() {
	getJokes()
		.then(
			(res) =>
				(results.innerHTML = `<img src=${res.icon_url} alt="chuck" />
                                <p>${res.value}</p>`),
		)
		.catch((error) => console.error(error));
}

readJokes();

/******************  MÉTHODE AVEC PROMESSES COMBINÉE AVEC TRY... CATCH *******************/
async function getJokes() {
	// création de l'objet Promise qui utise les méthodes resolve et reject
	return new Promise((resolve, reject) => {
		fetch(url)
			.then(async (response) => {
				try {
					if (!response.ok) {
						throw new Error("Erreur de récupération des données");
					}
					const res = await response.json();
					resolve(res);
				} catch (error) {
					reject(error);
				}
			})
			.catch((error) => {
				//console.error(error);
				reject(error);
			});
	});
}

function readJokes() {
	getJokes()
		.then(
			(res) =>
				(results.innerHTML = `<img src=${res.icon_url} alt="chuck" />
                                <p>${res.value}</p>`),
		)
		.catch((error) => console.error(error));
}

readJokes();
