// ADD INPUT TO GET INPUT INSIDE IT

let tasks = document.getElementById("tasks");

// ADD BUTTON BECAUSE ON CLICK ON BUTTON DO YOUR FUNCTION

let btn_create = document.getElementById("create");

// ADD YOUR FUNCTION WITH YOUR EVENT (ONCLICK)

// MAKE VARIABLE TO COUNT AND ADD ONE ON IT

let count = 0;

btn_create.addEventListener("click" , 

function(){
    if(tasks.value != "")
    {
        count = count + 1;
        localStorage.setItem("task" + count , tasks.value);
        tasks.value = ""

        // PRINT YOUR LOCAL STORAGE INFO

        // GET MY CONTAINER TO ADD THE TASKS INSIDE IT

        let box_tasks = document.getElementById("box-tasks");

        // MAKE ELEMENT TO PUT MY TASKS INSIDE IT
        let container_task = document.createElement("h4");
        let task_name = document.createTextNode(localStorage.getItem("task" + count));
        container_task.appendChild(task_name);
        box_tasks.appendChild(container_task);
    }
});

// IF THE LOCAL STORAGE INSIDE INFORMATION GET ALL INFORMATION

if(localStorage.length > 0)
{
    for(let i = 0; i < localStorage.length; i++)
    {
        let box_tasks = document.getElementById("box-tasks");
        let container_task = document.createElement("h4");
        count++;
        let task_name = document.createTextNode(localStorage.getItem(localStorage.key(i)));
        container_task.appendChild(task_name);
        box_tasks.appendChild(container_task);
    }
}

// ADD BTN DELETE TO CLEAR THE LOCAL STORAGE

let clear = document.getElementById("clear");

clear.addEventListener("click" , 
function() {
    location.reload()
    localStorage.clear()
})