let license = prompt("Avez vous le permit ?(oui/non)").toLowerCase();
let age = prompt("Votre age ?");

if (license == "oui"){
    document.write(`<p>permit obtenue</p>`);
} else if (license == "non"){
    document.write(`<p>permit non obtenue</p>`);
}
else {
    alert("erreur");
}

if (age < 18) {
    document.write(`<p>trop jeune</p>`);
} else {
    document.write(`<p>le bon age</p>`);
}

if (age < 18 && license == "oui"){
    document.write (`<p> trop jeune pour le permit</p>`)
}
