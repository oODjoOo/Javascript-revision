
// on attend que le DOM sois complétement charger

document.addEventListener("DOMContentLoaded", function () {

    let clickbox = document.getElementById("color-box");

    clickbox.addEventListener("click", function(){
        clickbox.style.width = "20rem";
		clickbox.style.height = "20rem";
    });


    clickbox.addEventListener("dblclick", function(){
        clickbox.style.width = "15rem";
		clickbox.style.height = "15rem";
    });

    clickbox.addEventListener("mouseover", function () {
        let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
        clickbox.style.backgroundColor =  "#" + randomColor;
    });

    // function modifier() {
    //     clickbox.innerHTML = "";
    // }

    // function modifier() {
	// 	clickbox.style.width = "20rem";
	// 	clickbox.style.height = "20rem";
	// }
    // // modifier();

    // clickbox.addEventListener("click", modifier);


});