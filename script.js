function getTasks() {
    return JSON.parse(localStorage.getItem("tasks") || "[]");
}

function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = getTasks();
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        list.innerHTML += `
            <li>
                ${task}
                <button class="delete-btn" onclick="deleteTask(${index})">X</button>
            </li>
        `;
    });
}

function addTask() {
    let input = document.getElementById("taskInput");

    if (input.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    let tasks = getTasks();
    tasks.push(input.value);
    saveTasks(tasks);

    input.value = "";
    loadTasks();
}

function deleteTask(index) {
    let tasks = getTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    loadTasks();
}

loadTasks();
