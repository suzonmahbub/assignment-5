function completeTask(id) {
    alert("Board updated successfully");
    const button = document.getElementById(id);

    if (button) {
        button.disabled = true;
        button.innerText = "completed"
    }
    let taskAssign = document.getElementById('taskAssign');
    let totalTask = document.getElementById('totalTask');

    taskAssign.innerText = parseInt(taskAssign.innerText) - 1;
    totalTask.innerText = parseInt(totalTask.innerText) + 1;  
}