document.body.title = "Personal NotePad"

const Display = document.getElementById("Display");
const InputContainer = document.getElementById("input-container");
const itemscontainer = document.getElementById("items-container");

const inputButton = document.createElement("button");
const item1 = document.createElement("li");
const item2 = document.createElement("li");
const item3 = document.createElement("li");
const item4 = document.createElement("li");
const item5 = document.createElement("li");

const button1 = inputButton.cloneNode(false);
const button2 = inputButton.cloneNode(false);
const button3 = inputButton.cloneNode(false);
const button4 = inputButton.cloneNode(false);
const button5 = inputButton.cloneNode(false);

button1.textContent = "Remove";
button2.textContent = "Remove";
button3.textContent = "Remove";
button4.textContent = "Remove";
button5.textContent = "Remove";

button1.style.Display = "none";


itemscontainer.append(item1);
itemscontainer.append(item2);
itemscontainer.append(item3);
itemscontainer.append(item4);
itemscontainer.append(item5);

inputButton.textContent = "Add item";
inputButton.style.fontFamily = "Arial";
inputButton.style.fontSize = "15px";


InputContainer.append(inputButton);

const Container = document.querySelector(".container");

let currentIndex = 0;


inputButton.onclick = function () {

    try {
        if (Display.value === "") {
            throw new Error("You must enter an item!!!!!")
        }
    }
    catch (error) {
        console.error(error)
        return;
    }



    if (currentIndex === 1) {
        item1.textContent = "";
        item1.append(Display.value, button1);
    }

    else if (currentIndex === 2) {
        item2.textContent = "";
        item2.append(Display.value, button2)
    }
    else if (currentIndex === 3) {
        item3.textContent = "";
        item3.append(Display.value, button3)
    }
    else if (currentIndex === 4) {
        item4.textContent = "";
        item4.append(Display.value, button4)
    }
    else if (currentIndex === 5) {
        item5.textContent = "";
        item5.append(Display.value, button5)
    }
    currentIndex++;

}
button1.onclick = function () {
    item1.textContent = ""
}
button2.onclick = function () {
    item2.textContent = ""
}
button3.onclick = function () {
    item3.textContent = ""
}
button4.onclick = function () {
    item4.textContent = ""
}
button5.onclick = function () {
    item5.textContent = "";
}


