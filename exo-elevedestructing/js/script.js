// 1. Tableau initial des élèves
const students = [
	{ name: "Magalie", notes: [15, 18, 12] },
	{ name: "John", notes: [10, 14, 13] },
	{ name: "Charlie", notes: [] }, // Élève sans notes
];
console.log(students);

// Fonction pour afficher le tableau des élèves et leurs moyennes
function displayStudents() {
	const resultDiv = document.getElementById("result");

	const studentsHTML = students
		.map((student) => {
			const { name, notes } = student;
			const totalNotes = notes.reduce((acc, note) => acc + note, 0);
			const average =
				notes.length > 0
					? (totalNotes / notes.length).toFixed(2)
					: "Aucune moyenne";

			return `
            <div>
                <h2>${name}</h2>
                <p><strong>Notes :</strong> ${
									notes.length > 0 ? notes.join(", ") : "Aucune note"
									// if(notes.length > 0) { document.querySelector("p").innerHTML = notes.join(", ") } else { document.querySelector("p").innerHTML = "Aucune note" }
								}</p>
                <p><strong>Moyenne :</strong> ${average}</p>
            </div>
        `;
		})
		.join("");

	resultDiv.innerHTML = studentsHTML;
}

// Afficher les élèves au chargement de la page
displayStudents();








// const employe = {
//     nom:"henry",
//     details:{
//         note: [12,15,16],
//         moyenne: `${moyenne}`,
//     },
// };
// const {nom,details} = employe;

// function moyenne() {
//     return (12+15+16)/3;
// }
// const nombres = [12,15,16];

// const resultatmoyenne = moyenne(...nombres);
// document.getElementById(
//     "henry",
// ).innerHTML = ` <p>Nom:${nom}</p>, <p>Notes:${details.note}</p>,<p>Moyenne: ${resultatmoyenne}</p>,`;
