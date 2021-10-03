
const taskEl = document.getElementById('taskEl')

const btnEl = document.getElementById('btnEl')
const editEl = document.getElementById('editEl')

const delallbtn = document.getElementById('delallbtn')

const tasttext = document.getElementById('tasttext')
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
                <div class="col-9">
                  <p id="tasttext" class="mb-0 small me-1">${tasks[i]}</p>
                </div>
                <div class="col-3 d-flex editdelbtns">

                   

                    <button id="edittaskbtn" class="btn btn-sm me-1 text-success" onclick="edittask(${i})";>
                    <span class="material-icons">edit</span>
                    </button>

                    <button id="deltaskbtn" class="btn btn-sm text-danger" onclick="deletetask(${i})";>
                    <span class="material-icons">delete</span>
                    </button>
                   
                </div>

                </div>
                <hr>
        `
    }

    taskP.innerHTML = taskitems

    if (tasks.length < 2) {
        delallbtn.textContent = ""
    }
    else{
        delallbtn.textContent = "Delete All tasks"
    }
}

function deletetask(i) {

    let msg = confirm("Are you sure to delete this task ?")

    if (msg === true) {
        tasksFromLocalStorage.splice(i, 1)

        localStorage.setItem("tasks", JSON.stringify(tasks));

        alltasks(tasks)
    }
    else {
        localStorage.setItem("tasks", JSON.stringify(tasks));

        alltasks(tasks)
    }

}

function edittask(i) {

    indexvalue = i
    taskEl.value = tasks[i]

    document.getElementById('editEl').style.display = "inline-block"
    document.getElementById('btnEl').style.display = "none"

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

    document.getElementById('editEl').style.display = "none"
    document.getElementById('btnEl').style.display = "inline-block"

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

    let msg = confirm("Are you sure to delete all tasks ?")

    if (msg === true) {
        localStorage.clear()
    }
    else {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        alltasks(tasks)
    }
})

