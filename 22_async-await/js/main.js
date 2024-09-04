// Réécrire ce code en utilisant async/await au lieu d'un seul simple .then/catch:
const results = document.getElementById("result");
let url = `data/search-user.json`;

async function loadJson() {
    try {
        const response = await fetch(url);
		console.log(response);

        let res = await response.json();
        console.log(res);

        if (response.status == 200) {

            return res;

        } else {
            throw new Error(response.status);
        }
    } catch(error) {
        console.error(error);
    }
}


function Jsonload() {
    loadJson().then(
        (res) =>console.log(
            (results.innerHTML = `<p>${res}</p>`)),
    );
}
for (let i=0 ; i < Array.length; i++) {
    
    document.write(Array[i]);
};
Jsonload();



//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     });
// loadJson('../data/search-user.json')
//   .catch(alert); // Error: 404