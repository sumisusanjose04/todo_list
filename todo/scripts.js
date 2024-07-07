document.getElementById('todoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    
    if (title === '') {
        alert('Please enter a task title');
        return;
    }
    
    const li = document.createElement('li');
    li.innerHTML = `
        <span>
            <strong>${title}</strong><br>${description}
        </span>
        <button onclick="markComplete(this)">Complete</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;
    document.getElementById('todoList').appendChild(li);
    
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskDescription').value = '';
});

function markComplete(button) {
    const li = button.parentElement;
    li.classList.toggle('completed');
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}
