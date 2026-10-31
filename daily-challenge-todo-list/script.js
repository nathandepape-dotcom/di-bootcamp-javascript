// Daily challenge : Todo list
const tasks = [];
const form = document.querySelector('#todoForm');
const input = document.querySelector('#taskInput');
const listTasks = document.querySelector('.listTasks');
let nextId = 0;

function addTask() {
    const text = input.value.trim();
    if (text === "") {
        return; // champ vide : on n'ajoute rien
    }

    // Bonus I : chaque tâche est un objet
    const task = { task_id: nextId, text: text, done: false };
    nextId++;
    tasks.push(task);

    // La ligne de la tâche dans le DOM : bouton X, case à cocher, label
    const row = document.createElement('div');
    row.classList.add('task');
    row.setAttribute('data-task-id', task.task_id);

    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa-solid', 'fa-xmark', 'delete');
    deleteIcon.addEventListener('click', () => deleteTask(task.task_id));

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'task-' + task.task_id;
    checkbox.addEventListener('change', () => doneTask(task.task_id));

    const label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.textContent = task.text;

    row.appendChild(deleteIcon);
    row.appendChild(checkbox);
    row.appendChild(label);
    listTasks.appendChild(row);

    input.value = "";
}

// Bonus I : cocher une tâche la passe à done = true, en rouge barré
function doneTask(taskId) {
    const task = tasks.find((t) => t.task_id === taskId);
    task.done = !task.done;
    const label = document.querySelector(`[data-task-id="${taskId}"] label`);
    label.classList.toggle('done', task.done);
}

// Bonus II : le bouton X supprime la tâche du tableau et du DOM
function deleteTask(taskId) {
    const index = tasks.findIndex((t) => t.task_id === taskId);
    tasks.splice(index, 1);
    document.querySelector(`[data-task-id="${taskId}"]`).remove();
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask();
});
