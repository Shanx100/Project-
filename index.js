///////////////////////Creting html Elements
document.body.title = "Daily Tasks App";

/////////////////////////Creating 5 elements;

const task1 = document.createElement("li");
const task2 = document.createElement("li");
const task3 = document.createElement("li");
const task4 = document.createElement("li");
const task5 = document.createElement("li");

task1.style.fontSize = "22px";
task1.style.color = "#fff";
task1.style.fontWeight = "400px";
task1.style.fontFamily = "Arial";

task2.style.fontSize = "22px";
task2.style.color = "#fff";
task2.style.fontWeight = "400px";
task2.style.fontFamily = "Arial";

task3.style.fontSize = "22px";
task3.style.color = "#fff";
task3.style.fontWeight = "400px";
task3.style.fontFamily = "Arial";

task4.style.fontSize = "22px";
task4.style.color = "#fff";
task4.style.fontWeight = "400px";
task4.style.fontFamily = "Arial";


task5.style.fontSize = "22px";
task5.style.color = "#fff";
task5.style.fontWeight = "400px";
task5.style.fontFamily = "Arial";


const task1Text = "#Finishing Javascript By August";
const task2Text = "#Learning Tailwind in 2 weeks after Js";
const task3Text = "#Learning React after Tailwind";
const task4Text = "#Building React Projects";
const task5Text = "#Full Matsery of Frontend Development By December";

const Taskcontainer = document.getElementById("Tasks");
Taskcontainer.append(task1);
Taskcontainer.append(task2);
Taskcontainer.append(task3);
Taskcontainer.append(task4);
Taskcontainer.append(task5);

const button = document.createElement("button");
const button2 = document.createElement("button");


task1.textContent = task1Text;
task2.textContent = task2Text;
task3.textContent = task3Text;
task4.textContent = task4Text;
task5.textContent = task5Text;

task1.append(button, button2);

const Display = document.getElementById("Display");
const item1 = document.createElement("ol");
const item2 = document.createElement("ol");
const item3 = document.createElement("ol");
const item4 = document.createElement("ol");
const item5 = document.createElement("ol");

Display.append(item1);
Display.append(item2);
Display.append(item3);
Display.append(item4);
Display.append(item5);




button.textContent = "Add";
button2.textContent = "Remove";

const bClone = button.cloneNode(true);
const bClone2 = button2.cloneNode(true);
task2.append(bClone, bClone2);

const cClone = button.cloneNode(true);
const cClone2 = button2.cloneNode(true);
task3.append(cClone, cClone2);



const dClone = button.cloneNode(true);
const dClone2 = button2.cloneNode(true);
task4.append(dClone, dClone2);


const eClone = button.cloneNode(true);
const eClone2 = button2.cloneNode(true);
task5.append(eClone, eClone2);





const clone = task1.cloneNode(true);
clone.textContent = task1Text;


const clone2 = task2.cloneNode(true);
clone2.textContent = task2Text;

const clone3 = task3.cloneNode(true);
clone3.textContent = task3Text;

const clone4 = task4.cloneNode(true);
clone4.textContent = task4Text;


const clone5 = task5.cloneNode(true);
clone5.textContent = task5Text;


button.onclick = function () {

    item1.append(clone);

}
button2.onclick = function () {
    item1.removeChild(clone);
}


bClone.onclick = function () {

    item2.append(clone2);

}
bClone2.onclick = function () {
    item2.removeChild(clone2);
}


cClone.onclick = function () {

    item2.append(clone3);

}
cClone2.onclick = function () {
    item2.removeChild(clone3);
}


dClone.onclick = function () {

    item4.append(clone4);

}
dClone2.onclick = function () {
    item4.removeChild(clone4);
}
try {
    eClone.onclick = function () {

        item5.append(clone5);

    }
    eClone2.onclick = function () {
        item5.removeChild(clone5);
    }


}
catch (error) {
    console.error(error);
}


