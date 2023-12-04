document.addEventListener('DOMContentLoaded', () => {
    displayTasks();
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];

    if (taskInput.value.trim() !== '') {
        taskList.push(taskInput.value.trim());
        localStorage.setItem('tasks', JSON.stringify(taskList));
        taskInput.value = '';
        displayTasks();
    }
}

function deleteTask(index) {
    const taskList = JSON.parse(localStorage.getItem('tasks'));
    taskList.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(taskList));
    displayTasks();
}

function displayTasks() {
    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskListElement = document.getElementById('taskList');

    taskListElement.innerHTML = '';

    taskList.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskListElement.appendChild(li);
    });
}
