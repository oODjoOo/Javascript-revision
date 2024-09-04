const person = {
name: "Maurice",
age: 30,
city: "Paris",
hobby: "videogame",
profession: "Dev",
};

function displayPersonInfo(person){
    const {name, age, city, hobby, profession} = person;
document.getElementById(
    "result",
).innerHTML = `Name: ${name}, Age: ${age}, City: ${city}, Hobby: ${hobby}, profession: ${profession}`;
};


function updatePersonInfo() {
    const newperson = {...person, name: "Alice", age: 20, city: "madrid", hobby: "gardener", profession:"teacher"};
    document.getElementById(
        "result",
    ).innerHTML = `Name: ${newperson.name}, Age: ${newperson.age}, City: ${newperson.city}, Hobby: ${newperson.hobby}, profession: ${newperson.profession}`;
};
const buttonshow = document.getElementById("show-info");
const buttonupdate = document.getElementById("update-info");

buttonshow.addEventListener("click", displayPersonInfo(person));
buttonupdate.addEventListener("click", updatePersonInfo());
