
// document.addEventListener("DOMContentLoaded", function () {


// let citation = document.getElementById("quote-text");
// console.log(citation);

// let autor = document.getElementById("author-name");
// console.log(autor);


// let button = document.getElementById("button");
// console.log(button);

// button.addEventListener("click",function(){


//     let copy = citation + autor;

//     copy = document.getElementById("quote-list").innerHTML;
// })

// });

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("quote-form");
    const quoteList = document.getElementById("quote-list");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche le rechargement de la page à la soumission du formulaire

        // Récupère les valeurs des champs de texte
        const quoteText = document.getElementById("quote-text").value.trim();
        const authorName = document.getElementById("author-name").value.trim();

        // Vérifie que les champs ne sont pas vides
        if (quoteText !== "" && authorName !== "") {
            // Crée un nouvel élément div pour afficher la citation
            const quoteDiv = document.createElement("div");
            quoteDiv.classList.add("quote-item");

            // Ajoute la citation et l'auteur dans le div
            quoteDiv.innerHTML = `<p class="quote">"${quoteText}"</p><p class="author">- ${authorName}</p>`;

            // Ajoute le div au conteneur de citations
            quoteList.appendChild(quoteDiv);

            // Réinitialise les champs du formulaire
            form.reset();
        }
    });
});