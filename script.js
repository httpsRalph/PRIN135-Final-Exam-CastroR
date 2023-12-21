const todoQueue = [];
const doneItems = [];

function addTodo() {
    const title = document.getElementById('txtTitle').value;
    const details = document.getElementById('txtDetails').value;

    if (title && details) {
        const todoItem = { title, details };
        todoQueue.push(todoItem);

        displayToDo();
        clearForm();
    }
}

function displayToDo() {
    const todoContainer = document.getElementById('todoContainer');
    todoContainer.innerHTML = '';

    todoQueue.forEach((item, index) => {
        const todoDiv = document.createElement('div');
        todoDiv.innerHTML = `<strong>Title:</strong> ${item.title}<br><strong>Details:</strong> ${item.details}<hr>`;
        todoContainer.appendChild(todoDiv);
    });
}

function processFIFO() {
    while (todoQueue.length > 0) {
        const processedItem = todoQueue.shift();
        doneItems.push(processedItem);
    }

    displayToDo();
    displayDone();
}

function processFILO() {
    while (todoQueue.length > 0) {
        const processedItem = todoQueue.pop();
        doneItems.push(processedItem);
    }

    displayToDo();
    displayDone();
}

function displayDone() {
    const doneContainer = document.getElementById('doneContainer');
    doneContainer.innerHTML = '';

    doneItems.forEach((item) => {
        const doneDiv = document.createElement('div');
        doneDiv.innerHTML = `<strong>Title:</strong> ${item.title}<br><strong>Details:</strong> ${item.details}<hr>`;
        doneContainer.appendChild(doneDiv);
    });
}

function reset() {
    todoQueue.length = 0;
    doneItems.length = 0;
    displayToDo();
    displayDone();
}

function clearForm() {
    document.getElementById('txtTitle').value = '';
    document.getElementById('txtDetails').value = '';
}
