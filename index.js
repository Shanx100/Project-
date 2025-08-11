const text = document.getElementById("text");
const sound = document.getElementById("sound");

text.textContent += "Guesser?";
const display = document.querySelector(".display");

function appendToDisplay(input) {
    display.value += input;
}
function clearDisplay() {
    display.value = "";
}

function Enter() {
    if (display.value === "SHAYNE") {
        sound.currentTime = 0;
        sound.play();
        setTimeout(function () {
            window.alert("Congrats on clearing the puzzle!!!");
        }, 3000);
    }
}