

    // let button = document.querySelector("#toggle-button");

    // button.addEventListener("click", function () {

    //     let img = document.getElementById("lightbulb");
    //     img.src = "./images/on.png";
    //     img.alt = "Une ampoule allumer";

    //     function modifier() {
    //         document.querySelector("body").style.backgroundColor = "black";
    //         document.querySelector("h1").innerText = "La Lumière Fut !!";
    //         document.querySelector("h1").style.color = "red";
    //         document.querySelector("button").innerText = "éteindre";
    //     }
    //     modifier();
        
    // });




    let button = document.querySelector("#toggle-button");

button.addEventListener("click", function () {
    let img = document.getElementById("lightbulb");
    let body = document.querySelector("body");
    let h1 = document.querySelector("h1");

    if (img.src.includes("on.png")) {
        // Turn off the lightbulb
        img.src = "./images/off.png";
        img.alt = "Une ampoule éteinte";
        body.style.backgroundColor = "#edd37c";
        h1.innerText = "Que la lumière soit!";
        h1.style.color = "black";
        button.innerText = "allumer";
    } else {
        // Turn on the lightbulb
        img.src = "./images/on.png";
        img.alt = "Une ampoule allumée";
        body.style.backgroundColor = "black";
        h1.innerText = "La Lumière Fut !!";
        h1.style.color = "red";
        button.innerText = "éteindre";
    }
});
