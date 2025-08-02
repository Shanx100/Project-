const Red = document.querySelector(".Red");
const Green = document.querySelector(".Green");
const Blue = document.querySelector(".Blue");
const Orange = document.querySelector(".Orange");
const White = document.querySelector(".White");
const sound = document.getElementById("sound");

Red.addEventListener("click", () => {
    const section = document.querySelector(".section");
    sound.currentTime = 0;
    sound.play();
    section.style.background = "red";
    Red.style.display = "none";
    White.style.display = "flex";
    Green.style.display = "flex";
    Blue.style.display = "flex";
    Orange.style.display = "flex";
})
Green.addEventListener("click", () => {
    const section = document.querySelector(".section");
    sound.currentTime = 0;
    sound.play();
    section.style.background = "green";
    Green.style.display = "none";
    Red.style.display = "flex";
    Blue.style.display = "flex";
    Orange.style.display = "flex";
})
Blue.addEventListener("click", () => {
    const section = document.querySelector(".section");
    sound.currentTime = 0;
    sound.play();
    section.style.background = "blue";
    Green.style.display = "flex";
    Blue.style.display = "none";
    Red.style.display = "flex";
    Orange.style.display = "flex";
    White.style.display = "flex";
})
Orange.addEventListener("click", () => {
    const section = document.querySelector(".section");
    sound.currentTime = 0;
    sound.play();
    section.style.background = "orange";
    Blue.style.display = "flex";
    Orange.style.display = "none";
    White.style.display = "flex";
    Red.style.display = "flex";
    Green.style.display = "flex";


})
White.addEventListener("click", () => {
    const section = document.querySelector(".section");
    sound.currentTime = 0;
    sound.play();
    section.style.background = "white";
    Orange.style.display = "flex";
    White.style.display = "none";
    Red.style.display = "flex";
    Green.style.display = "flex";
    Blue.style.display = "flex";
})

