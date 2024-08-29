let message = "";

function plat (arg) {
    switch (arg) {
        case 'Pizza':
            console.log("Tu a choisi la Zap");
            document.getElementById("message").textContent = "Tu a choisi la Zap";
            break;
        case 'Pâtes':
            console.log("Tu a choisi les pates");
            document.getElementById("message").textContent = "Tu a choisi les pates";
            break;
        case 'Salade':
            console.log("Tu a choisi la salade");
            document.getElementById("message").textContent = "Tu a choisi la salade";
            break;

        case 'Sushi':
            console.log("Tu a choisi les sushi");
            document.getElementById("message").textContent = "Tu a choisi les sushi";
            break;

        default:
           console.log("choisissez vôtre plat"); 
    }
}
// plat()

// document.getElementById("demo").onclick = function() {myFunction()};

// function myFunction() {
//   document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
// }