function addition_Function() { // Addition function
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() { // Subtraction function
    var subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 = " + subtraction;
}

function multiply() { // Multiplication function
    var multiplication = 6 * 8;
    document.getElementById("Math3").innerHTML = "6 * 8 = " + multiplication;
}

function divide() { // Division function
    var division = 48 / 6;
    document.getElementById("Math4").innerHTML = "48 / 6 = " + division;
}

function moreMath() { // More complex equation
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() { // Modulus function
    var simple_Math2 = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math2;
}

function negation_Operator() { // Negation function
    var x = 10;
    document.getElementById("Math7").innerHTML = "The negative version of 10 is " + -x;
}

var Y = 0;

function add() { // Using increments
    Y++;
    document.getElementById("result").innerHTML = Y;
}

function subtract() { // Using decrements
    Y--;
    document.getElementById("result").innerHTML = Y;
}

function random1() { // Function using "Math.random()"
    document.getElementById("randomp").innerHTML = Math.round(Math.random() * 100);
}