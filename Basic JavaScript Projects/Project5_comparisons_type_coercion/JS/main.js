document.write(typeof "Word"); // Utilizing document.write() to display a data type ("string")

function my_Function1() { // Function to get "NaN"
    document.getElementById("Test").innerHTML = 0/0;
}

function my_Function2() { // Function using isNaN for "true"
    document.getElementById("Test2").innerHTML = isNaN('This is not a number');
}

function my_Function3() { // Function using isNaN for "false"
    document.getElementById("Test3").innerHTML = isNaN("05");
}

function my_Function4() { // Function to get "Infinity"
    document.getElementById("Test4").innerHTML = 2E400;
}

function my_Function5() { // Function to get "-Infinity"
    document.getElementById("Test5").innerHTML = -2E400;
}

function my_Function6() { // Function using boolean to get "true"
    document.getElementById("button1").innerHTML = (4 > 3);
}

function my_Function7() { // Function using boolean to get "false"
    document.getElementById("button2").innerHTML = (4 > 5);
}

console.log(10 == 10); // Using "==" to return "true" in console
console.log(10 == 11); // Using "==" to return "false" in console


document.write("10" + 5); // Writing an expression with a string and number

var X = 10;         // Setting variables to use while writing an
var Y = 10;         // expressions for "==="
var Z = "eleven";
var A = "10";


document.write(X === Y); // Returning "true" ; Utilizing "==="
document.write(X === Z); // Returning "false"; different data type / different value
document.write(X === A); // Returning "false"; different data type / same value
document.write(Z === A); // Returning "false"; same data type / different value

function my_Function8() { // Utilizing "&&" and "||" to display "true" or "false"
    document.getElementById("p1").innerHTML = (5 > 2 && 10 > 4);
    document.getElementById("p2").innerHTML = (5 > 10 && 10 > 4);
    document.getElementById("p3").innerHTML = (5 > 10 || 10 > 4);
    document.getElementById("p4").innerHTML = (5 > 10 || 10 > 20);
}

function not_Function() { // Utilizing the "!" operator
    document.getElementById("Not").innerHTML = !(20 > 10);
    document.getElementById("Not2").innerHTML = !(10 > 20);
}