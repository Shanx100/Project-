const list = document.querySelector(".list");
const Button = document.getElementById("Button");
const sound = document.getElementById("sound");
const select = document.getElementById("select");

let AllChars = [
    "Apple",     // A
    "Banana",    // B
    "Cat",       // C
    "Dog",       // D
    "Elephant",  // E
    "Fish",      // F
    "Giraffe",   // G
    "House",     // H
    "Ice",       // I
    "Jelly",     // J
    "Kite",      // K
    "Lion",      // L
    "Monkey",    // M
    "Nest",      // N
    "Orange",    // O
    "Penguin",   // P
    "Queen",     // Q
    "Rabbit",    // R
    "Sun",       // S
    "Tiger",     // T
    "Umbrella",  // U
    "Violin",    // V
    "Whale",     // W
    "Xylophone", // X
    "Yak",       // Y
    "Zebra"      // Z
];

Button.addEventListener("click", () => {
    select.currentTime = 0;
    select.play();
    Button.style.display = "none";
    setTimeout(() => {
        sound.loop = true;
        sound.currentTime = 0;
        sound.play();
    }, 5000);

    list.style.display = "block";

})

function displaywords() {
    let word = "";
    for (let i = 0; i < 1; i++) {
        const randomindex = Math.floor(Math.random() * AllChars.length);
        word += AllChars[randomindex];
    }
    list.textContent = word;
}
displaywords();
setInterval(displaywords, 5000);
