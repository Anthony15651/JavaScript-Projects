function myFunction() { // Utilizing concat()
    var part1 = "Here is ";
    var part2 = "an example ";
    var part3 = "of using ";
    var part4 = "concatenation.";
    var sentence = part1.concat(part2, part3, part4);
    document.getElementById("p1").innerHTML = sentence;
}

function myFunction2() { // Utilizing slice()
    var sentence2 = "Cut me a slice of pizza, please.";
    var section = sentence2.slice(9,14);
    document.getElementById("p2").innerHTML = section;
}

function myFunction3() { // Utilizing toUpperCase()
    var sentence3 = document.getElementById("p3").innerHTML;
    var Capital = sentence3.toUpperCase();
    document.getElementById("p3").innerHTML = Capital;
}

function myFunction4() { // Utilizing search()
    var sentence4 = "This is a sentence.";
    var search1 = sentence4.search("sentence");
    document.getElementById("p4").innerHTML = search1;
}

function myFunction5() { // Utilizing toString()
    var X = 100;
    document.getElementById("p5").innerHTML = X.toString();
}

function myFunction6() { // Utilizing toPrecision()
    var Y = 123.456789;
    document.getElementById("p6").innerHTML = Y.toPrecision(4);
}

function myFunction7() { // Utilizing toFixed()
    var Z = 987.654321;
    document.getElementById("p7").innerHTML = Z.toFixed(3);
}

function myFunction8() { // Utilizing valueOf()
    var X = "This is a sentence.";
    var Y = X;
    document.getElementById("p8").innerHTML = Y.valueOf();
}
