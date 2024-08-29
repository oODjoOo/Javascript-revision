// let square = document.getElementById("square");
// let up = "ArrowUp";
// let down = "ArrowDown";
// let left = "ArrowLeft";
// let right = "ArrowRight";

// document.addEventListener("keydown", function (event) {
//     switch (event.key){
//         case left:    // flèche gauche
//             $("#square").finish().animate({
//                 left: "-=10px"
//             });
//             break;
//         case up:    // flèche haut
//             $("#square").finish().animate({
//                 top: "-=10px"
//             });
//             break;
//         case right:    // flèche droite
//             $("#square").finish().animate({
//                 left: "+=10px"
//             });
//             break;
//         case left:    // flèche du bas
//             $("#square").finish().animate({
//                 top: "+=10px"
//             });
//             break;
//         }
//     });

let square = document.getElementById("square");
let step = 10;  // pixels to move per key press

document.addEventListener("keydown", function(event) {
    let left = parseInt(square.style.left) || 0;
    let top = parseInt(square.style.top) || 0;

    switch (event.key) {
        case "ArrowLeft":
            square.style.left = (left - step) + "px";
            break;
        case "ArrowUp":
            square.style.top = (top - step) + "px";
            break;
        case "ArrowRight":
            square.style.left = (left + step) + "px";
            break;
        case "ArrowDown":
            square.style.top = (top + step) + "px";
            break;
    }
});