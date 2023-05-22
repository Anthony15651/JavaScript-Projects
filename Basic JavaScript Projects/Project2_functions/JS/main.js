function function1() {
    A = "Now click me!";
    document.getElementById("button").innerHTML = A;
}

function function2() { // Here is a function that includes
    X = "Great "; // assigning two variables and utilizes the 
    Y = "job!"; // "document.getElementById" method
    document.getElementById("button").innerHTML = X + Y;
}

function Make_Red(font_red) { // Here I am practicing more
    var font = document.getElementById("P1");
    font.style.color = "red"; // functions
}

function myFunction() { // Here, I am using the "+=" operator
    var sentence = "This is one way"; // to concatenate a string.
    sentence += " to concatenate a string!";
    document.getElementById("concatenate").innerHTML = sentence;
}

function myFunction2() { // Another example of concatenating
    Z = "Nice "; // with "+=", this time using "onmouseover"
    Z += "work!";
    document.getElementById("conc2").innerHTML = Z;
}

function changeColor(newColor) {
    var elem = document.getElementById("p2");
    elem.style.color = newColor;
}