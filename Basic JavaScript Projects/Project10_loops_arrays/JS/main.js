function Call_Loop() { // Utilizing a "while" loop
    var Result = "";
    var Counter = 1;
    while (Counter < 31) {
        Result = Result + " " + Counter;
        Counter++;
    }
    document.getElementById("Loop").innerHTML = Result;
}

function myFunction() { // Utilizing the "length" property and "let" keyword
    let text = document.getElementById("p2").innerHTML;
    let length = text.length;
    document.getElementById("p2").innerHTML = length;
}

// "for" loop practice
var Instruments = ["Guitar", "Drums", "Piano","Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function myFunction2() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("p3").innerHTML = Content;
}

function for_Loop() { // Utilizing a "for" loop and "let" keyword
    let X = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
    let result2 = "";
    let Z;
    for (Z = 0; Z < X.length; Z++) {
        result2 += X[Z] + " ";
    }
    document.getElementById("List_of_Instruments").innerHTML = result2;
}

function array_Function() { // Utilizing an array
    var time = [];
    time[0] = "morning";
    time[1] = "afternoon";
    time[2] = "evening";
    time[3] = "night";
    document.getElementById("Array").innerHTML = "Hello, and good " + time[1] + "!";
}

function constant_function() { // Utilizing "const"
    const Fruit = {type:"apple", size:"small", color:"red"};
    Fruit.color = "yellow";
    Fruit.price = "$2.50";
    document.getElementById("Constant").innerHTML = "The cost of the " + Fruit.type + " was " + Fruit.price + ", and it was " + Fruit.color + ".";
}

function myFunction3() { // Setting up button to use "return"
    document.getElementById("p4").innerHTML = returnFunction('Anthony');
    function returnFunction(name) { // Utiilzing the "return" statement
        return "Hello " + name;
    }
}

let animal = { // Utilizing "this"
    type: "dog ",
    color: "brown ",
    age: "4 ",
    gender: "male",
    description: function() {
        return "The " + this.type + "is a " + this.age + "year old " + this.color + this.gender + ".";
    }
}
document.getElementById("p5").innerHTML = animal.description();

function breakFunction() { // Utilizing "break"
    let text = "";
    for (let i = 0; i < 10; i++) {
        if (i == 5) {break;}
        text += "The number is " + i + "<br>";
    }
    document.getElementById("p6").innerHTML = text;
}

function continueFunction() { // Utilizing "continue"
    let text = "";
    for (let i = 0; i < 10; i++) {
        if (i == 5) {continue;}
        text += "The number is " + i + "<br>";
    }
    document.getElementById("p7").innerHTML = text;
}