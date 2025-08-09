function scrollintoSection() {
    const secondsection = document.getElementById("second-section");
    secondsection.scrollIntoView({ behaviour: "smooth" });
}
let fruits = ["banana", "orange", "sweets"];
fruits.pop([1]);
console.log(fruits);