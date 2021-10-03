
const taskEl = document.getElementById('taskEl')

const btnEl = document.getElementById('btnEl')
const editEl = document.getElementById('editEl')

const delallbtn = document.getElementById('delallbtn')

const deltaskbtn = document.getElementById('deltaskbtn')
const edittaskbtn = document.getElementById('edittaskbtn')


let indexvalue;

let taskP = document.getElementById('taskP')

let tasks = []

let tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"))


if (tasksFromLocalStorage) {
    tasks = tasksFromLocalStorage
    alltasks(tasks)
}


function alltasks(tasks) {
    let taskitems = ""

    for (let i = 0; i < tasks.length; i++) {
        taskitems += `
                <div class="d-flex mt-3">
                <p class="mb-0 small me-3">${tasks[i]}</p>
                <button id="deltaskbtn" class="btn btn-sm btn-danger me-3" onclick="deletetask(${i})";>Delete</button>
                <button id="edittaskbtn" class="btn btn-sm btn-info me-3" onclick="edittask(${i})";>Edit</button>
                </div>
                <hr>
        `
    }

    taskP.innerHTML = taskitems
}

function deletetask(i) {

    tasksFromLocalStorage.splice(i, 1)

    localStorage.setItem("tasks", JSON.stringify(tasks));

    alltasks(tasks)

}

function edittask(i) {

    indexvalue = i
    taskEl.value = tasks[i]

}

editEl.addEventListener("click", function () {

    if (taskEl.value == '') {
        console.log("type something")
    } else {
        tasks[indexvalue] = taskEl.value //temporary

        taskEl.value = ""
        localStorage.setItem("tasks", JSON.stringify(tasks));
        alltasks(tasks)
    }

})

btnEl.addEventListener("click", function () {
    if (taskEl.value == '') {
        console.log("type something")
    } else {
        tasks.push(taskEl.value)
        taskEl.value = ""
        localStorage.setItem("tasks", JSON.stringify(tasks));

        alltasks(tasks)
    }


})

delallbtn.addEventListener("click", function () {
    localStorage.clear()
})

