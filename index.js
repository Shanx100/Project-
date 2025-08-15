document.body.title = "To-do List App";
const inputbox = document.getElementById("inputbox");
const listcontainer = document.querySelector(".listcontainer");

function AddTask() {
    if (inputbox.value === "") {
        window.alert("You must enter a task");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveTask();
}


listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTask();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTask();
    }
}, false);

function saveTask() {
    localStorage.setItem("data", listcontainer.innerHTML);
}


function showTask() {
    let storedData = localStorage.getItem("data");
    listcontainer.innerHTML = storedData ? storedData : "";
}
showTask();