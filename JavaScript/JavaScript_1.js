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