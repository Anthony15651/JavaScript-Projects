window.alert("Hello, World!"); // Utilizing window.alert()

document.write("Here is some text. "); // Utilizing document.write()

Sent1 = "This is the beginning of the string" // Creating "Sent1" variable
Sent2 = " and this is the end of the string" // Creating "Sent2" variable
document.write(Sent1 + Sent2); // Concatenating "Sent1" and "Sent2"

x = 5 // Writing an expression
document.write(x + 10); // Creating a statement using the previous expression

function My_First_Function() { // This is a function to change the text
    var str = "This is the button text!"; // of the button once it is
    document.getElementById("Button_Text").innerHTML = str; // clicked.
}
