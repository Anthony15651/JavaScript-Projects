function displayType(fruit) {
    var fruitType=fruit.getAttribute("data-fruit_type");
    alert("A " + fruitType + " is a " + fruit.innerHTML + " fruit!");
}