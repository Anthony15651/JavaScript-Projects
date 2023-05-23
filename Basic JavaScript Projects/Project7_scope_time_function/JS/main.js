var X = 5; // Global variable

function Add() {
    Y = 50 // Local variable
    document.getElementById("p1").innerHTML = X + Y;
}

function Add2() { // Using console.log() to diagnose issue
    console.log(Y + 100);
}

function Click1() { // Using Date()
    if (new Date().getHours() < 18) {
        document.getElementById("p3").innerHTML = "Good day!";
    }
}

function Click2() { // My own if / else if / else statement
    input1 = document.getElementById("input1").value;
    if (input1 >= 21) {
        document.getElementById("answer").innerHTML = "You meet the minimum age requirements to rent a car in Oregon!";
    } else if (input1 >= 18 && input1 < 21) {
        document.getElementById("answer").innerHTML = "You meet the mininum age requirements, but most rental companies prefer you to be at least 21";
    } else {
        document.getElementById("answer").innerHTML = "You do not meet the minimum age requirements to rent a car in Oregon.";
    }
}

function Time_Function() { // Using the "Time_Function()" outlined
    var Time = new Date().getHours(); // In previous slides
    var Reply;
    if (Time < 12 && Time > 0) {
        Reply = "It is morning time!";
    } else if (Time >= 12 && Time < 18) {
        Reply = "It is afternoon.";
    } else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}