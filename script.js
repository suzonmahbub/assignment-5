let count = 0;
let taskAssign = document.getElementById('taskAssign');
let totalTask = document.getElementById('totalTask');
const history1 = document.getElementById('history');
const history = [];
const currentDate = document.getElementById('current-date');
const currentDay = document.getElementById('current-day');

currentDay.innerHTML = `${new Date().toDateString().slice(0, 3)} ,`


currentDate.innerHTML = new Date().toDateString().slice(3)

function completeTask(id, text) {
    alert("Board updated successfully");
    const button = document.getElementById(id);
    console.log(text)
    if (button) {
        button.disabled = true;
        button.innerText = "completed"
    }
    if (text) {
        history.push(text)
    }
    console.log(history)

    count++
    if (count === 6) {
        alert('all completed done')
    }
    for (let i = 0; history.length > i; i++) {
        history1.innerHTML = ` <p>${history[i]}</p>`
    }


    taskAssign.innerText = parseInt(taskAssign.innerText) - 1;
    totalTask.innerText = parseInt(totalTask.innerText) + 1;


}

function clearHistory() {
    count === 0;
    history1.innerText = ''
}

function changeBg() {
    document.body.style.background = getRandomColor();
}

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}