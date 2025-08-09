const display = document.getElementById("Display");

function appendToDisplay(input) {
    display.value += input;
}
function ClearDisplay() {
    display.value = "";
}
function calculate() {
    display.value = eval(display.value);
}