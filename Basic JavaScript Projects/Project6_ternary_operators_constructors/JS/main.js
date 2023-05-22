function Ride_Function() { // Using ternary operators
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() { // Using ternary operators
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age >= 18) ? "You are old enough":"You are not old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) { // Creating vehicle class
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); // Creating info for users
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() { // Returning requested info
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Shoe(Brand, Color, Size) { // Writing a constructor
    this.Shoe_Brand = Brand;        // function that uses "new"
    this.Shoe_Color = Color;
    this.Shoe_Size = Size;
}

var Anthony = new Shoe("Adidas", "white", 8.5); // Using "this"

function myFunction2() { // Displays results of constructor function
    document.getElementById("New_and_This").innerHTML = "Anthony's shoe size is " + Anthony.Shoe_Size + ", and he is wearing " + Anthony.Shoe_Color + " " + Anthony.Shoe_Brand;
}

var Starting = 0;

function Add() { // Nested function
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        function Plus_one() {Starting += 1;}
        Plus_one();
        return Starting;
    }
}