document.body.title = "To-do-List-App";
const inputbox = document.getElementById("input-box");
const listcontainer = document.querySelector(".list-container");

function AddTask() {
    if (inputbox.value === "") {
        window.alert("You must add something!!!")
    }

    else {

        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.append(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}
listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

////////////////////Storing tasks in Local Browswer;

function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();





