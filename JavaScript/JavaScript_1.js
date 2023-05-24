function pet_function() {
    var pet_output;
    var pets = document.getElementById("pet_input").value;
    var pet_string = " are pretty cool pets."
    switch(pets) {
        case "Dog":
            pet_output = "Dogs" + pet_string;
        break;
        case "Cat":
            pet_output = "Cats" + pet_string;
        break;
        case "Bird":
            pet_output = "Birds" + pet_string;
        break;
        case "Turtle":
            pet_output = "Turtles" + pet_string;
        break;
        case "Fish":
            pet_output = "Fish" + pet_string;
        break;
        case "Hamster":
            pet_output = "Hamsters" + pet_string;
        break;
        default:
            pet_output = "Please enter an option exactly as it is listed above.";
    }
    document.getElementById("output").innerHTML = pet_output;
}

function myFunction1() {
    var X = document.getElementsByClassName("class1");
    text_string = "This text has been updated";
    X[0].innerHTML = text_string;
}

function myFunction2() {
    var c = document.getElementById("canvas1");
    c.getContext("2d").font = "30px Arial";
    c.getContext("2d").fillText("Hello World", 170, 130);
}

function myFunction3() {
    var c = document.getElementById("canvas2")
    var cx = c.getContext("2d");
    grd = cx.createLinearGradient(0, 0, 500, 0);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "white");
    cx.fillStyle = grd;
    cx.fillRect(0, 0, 500, 250);
}