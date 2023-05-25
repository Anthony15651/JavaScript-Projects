let activePlayer = "X"; // KEEPS TRACK OF WHOSE TURN IT IS
let selectedSquares = []; // THIS ARRAY STORES MOVES. WE WILL USE TO DETERMINE WIN CONDITIONS

// THIS FUNCTION IS FOR PLACING X OR O INTO A SQUARE
function placeXOrO(squareNumber) {
    // THIS CONDITION ENSURES A SQUARE HAS NOT BEEN SELECTED ALREADY.
    // THE .some() METHOD IS USED TO CHECK EACH ELEMENT IN selectSquare ARRAY
    // TO SEE IF IT CONTAINS THE SQUARE NUMBER CLICKED ON
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        // THIS VARIABLE RETRIEVES THE HTML ELEMENT ID THAT WAS CLICKED
        let select = document.getElementById(squareNumber);
        // THIS CONDITION CHECKS WHO'S TURN IT IS              
        if (activePlayer === "X") {
            select.style.backgroundImage = "url(Images/x.png)"; // IF ACTIVE PLAYER IS X, "X" IS PLACED
        }
        else {
            select.style.backgroundImage = "url(Images/o.png)"; // IF ACTIVE PLAYER IS NOT X, "O" IS PLACED
        }
        // squareNumber AND activePlayer ARE CONCATENATED TOGETHER AND ADDED TO AN ARRAY
        selectedSquares.push(squareNumber + activePlayer);
        // THIS CALLS A FUNCTION TO CHECK FOR WIN CONDITIONS
        checkWinConditions();
        // THIS CONDITION IS FOR CHANGING THE ACTIVE PLAYER
        if (activePlayer === "X") { // IF ACTIVE PLAYER IS X, CHANGE TO O
            activePlayer = "O";
        }
        else { // IF ACTIVE PLAYER IS NOT X, CHANGE TO X
            activePlayer = "X";
        }
        //THIS FUNCTION PLAYS THE PLACEMENT SOUND
        audio('./Media/place.mp3');
        //THIS CONDITION CHECKS TO SEE IF IT IS THE COMPUTERS TURN
        if (activePlayer === "O") {
            disableClick();
            // THIS FUNCTION WAITS 1 SECOND BEFORE TEH COMPUTER PLACES AN IMAGE AND ENABLES CLICK
            setTimeout(function() { computersTurn(); }, 1000);
        }
        // RETURNING TRUE IS NEEDED FOR OUR computersTurn() FUNCTION TO WORK
        return true;
    }
    // THIS FUNCTION RESULTS IN A RANDOM SQUARE BEING SELECTED BY THE COMPUTER
    function computersTurn() {
        // THIS BOOLEAN IS NEEDED FOR OUR WHILE LOOP
        let success = false;
        // THIS VARIABLE STORES A RANDOM NUMBER 0-8
        let pickASquare;
        // THIS CONDITION ALLOWS OUR WHILE LOOP TO KEEP TRYING IF A SQUARE IS SELECTED ALREADY
        while (!success) {
            // A RANDOM NUMBER BETWEEN 0-8 IS SELECTED
            pickASquare = String(Math.floor(Math.random() * 9));
            // IF THE RANDOM NUMBER EVALUATED RETURNS TRUE, THE SQUARE HASN'T BEEN SELECTED YET
            if (placeXOrO(pickASquare)) {
                // THIS LINE CALLS THE FUNCTION
                placeXOrO(pickASquare);
                // THIS CHANGES OUR BOOLEAN AND ENDS THE LOOP
                success = true;
            }
        }
    }
}