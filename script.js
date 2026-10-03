// Select DOM elements
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return; // Prevent empty tasks

    // Create list item (li)
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete-btn');

    // Append delete button to li
    li.appendChild(deleteBtn);
    // Append li to the main list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";

    // Toggle complete on click
    li.addEventListener('click', function(e) {
        // Prevent toggling if the delete button itself was clicked
        if (e.target !== deleteBtn) {
            li.classList.toggle('completed');
        }
    });

    // Delete task on click
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });
}

// Event listener for button click
addBtn.addEventListener('click', addTask);

// Event listener for "Enter" key press
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});