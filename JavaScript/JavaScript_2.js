function validateForm() {
    let x = document.forms["form1"]["fname"].value;
    let y = document.forms["form1"]["lname"].value;
    if (x == "" || y == "") {
        alert("Both names must be filled out");
        return false;
    }
}

function myFunction() {
    alert("Hello, world!");
}