const form = document.getElementById("form");
const nameinput = document.getElementById("nom");
const ageinput = document.getElementById("age");
const passwordinput = document.getElementById("password");
const errorMsg = document.getElementById("errorMsg");
const successMsg = document.getElementById("successMsg");
const btn = document.getElementById("submit");

let regex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (nameinput.length > 0) {
        document.getElementById(
            "nom",
        ).innerHTML = `<p><strong>Votre nom est bon </strong></p>`;
    } else {
        // Sinon le tableau est vide (soit égal à zéro)
        document.getElementById(
            "nom",
        ).innerHTML = `Pas de nom !`;
    }
    const passwordvalue = passwordinput.value;
    

    console.log(passwordvalue);

    if (regex.test(passwordvalue)) {
        successMsg.innerHTML = "Mot de passe valide";
    }
    errorMsg.innerHTML = "Mot de passe non valide";





});

