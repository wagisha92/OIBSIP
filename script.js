const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Load saved tasks from localStorage
taskList.innerHTML = localStorage.getItem("tasks") || "";

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if(taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    // Mark task as done on click
    li.addEventListener("click", () => {
        li.classList.toggle("done");
        saveTasks();
    });

    // Create delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent marking done when deleting
        li.remove();
        saveTasks();
    });

    li.appendChild(delBtn);
    taskList.appendChild(li);

    taskInput.value = "";
    saveTasks();
}

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem("tasks", taskList.innerHTML);
}