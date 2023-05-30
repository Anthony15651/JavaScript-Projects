// THIS FUNCTION IS TO VALIDATE FORMS
function validateForm() {
    let fName = document.forms["myForm"]["fName"].value;
    let lName = document.forms["myForm"]["lName"].value;
    let email = document.forms["myForm"]["email"].value;
    let phone = document.forms["myForm"]["phone"].value;
    let notValid = "All sections must be filled out"
    if (fName == "") {
        alert(notValid);
        return false;
    } else if (lName == "") {
        alert(notValid);
        return false;
    } else if (email == "") {
        alert(notValid);
        return false;
    } else if (phone == "") {
        alert(notValid);
        return false;
    }
}

// POPUP FORM FUNCTIONS
function openForm() {
    document.getElementById("myForm2").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm2").style.display = "none";
}

// SLIDESHOW FUNCTION
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
    $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);
