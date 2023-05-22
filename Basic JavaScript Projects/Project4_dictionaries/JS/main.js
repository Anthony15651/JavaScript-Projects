var Animal = { // Creating dictionary for "Animal"
    Species:"Cat",
    Color:"Grey",
    Breed:"Korat",
    Age:3,
    Sound:"Meow!",
}

delete Animal.Sound; // Deleting Animal.Sound

function my_Dictionary() { // Function that outputs a key-value pair
     document.getElementById("Dictionary").innerHTML = Animal.Sound;
}
