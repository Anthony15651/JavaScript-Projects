// THIS FUNCTION GETS THE TASK FROM INPUT
function get_todos() {
    // CREATES AN ARRAY OF TASKS THAT ARE INPUTED
    var todos = new Array;
    // PULLS THE TASK THAT WAS SAVED IN BROWSER'S MEMORY
    var todos_str = localStorage.getItem('todo');
    // IF THE INPUT IS NOT NULL, THEN JSON.parse WILL
    // WORK WITH BROWSER TO MAKE THE TASK A JS OBJECT
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

// THIS FUNCTION ADDS THE INPUTED TASK TO THE get_todos
// FUNCTION ARRAY
function add() {
    // THIS TAKES THE INPUTED TASK AND CREATES A VARIABLE
    var task = document.getElementById('task').value;

    var todos = get_todos();
    // THIS ADDS A NEW TASK TO THE END OF THE ARRAY
    todos.push(task);
    // THIS CONVERTS THE TASK INPUT TO A JSON STRING
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

// THIS FUNCTION KEEPS THE TASKS PERMANETLY DISPLAYED ON SCREEN
function show() {
    // THIS SETS THE TASK THAT WAS RETRIEVED AS A VARIABLE
    var todos = get_todos();

    // THIS SETS UP EACH TASK AS AN UNORDERED LIST
    var html = '<ul>';
    // THIS DISPLAYS A TASK TO THE LIST IN ORDER THAT IT IS INPUTED
    for (var i = 0; i < todos.length; i++) {
        // THIS ALSO DISPLAYS THE TASK AS A LIST
        // AND CREATES THE BUTTON WITH THE "X"
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';
    // THIS DISPLAYS THE TASK AS A LIST
    document.getElementById('todos').innerHTML = html;

    var xbuttons = document.getElementsByClassName('remove');
    for (var i = 0; i < xbuttons.length; i++) {
        xbuttons[i].addEventListener('click', remove);
    };
}

// THIS DISPLAYS THE INPUTED TASK WHEN THE 'Add Item'
// BUTTON IS CLICKED
document.getElementById('add').addEventListener('click', add);
// THIS WILL KEEP THE INPUTS DISPLAYED PERMANTLY ON SCREEN
show();

// THIS FUNCTION REMOVES ITEMS FROM THE LIST
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false;
}