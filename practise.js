const Diceinput = document.getElementById("Diceinput");
const Button = document.getElementById("Button");
const heroimage = document.getElementById("image");
const ImageResult = document.getElementById("ImageResult");
const sound = document.getElementById("sound");
const soundselector = document.getElementById("sound-selector");


let images = [];
let image = "";

Button.onclick = function () {
    const diceinput = Diceinput.value;

    for (let i = 0; i < diceinput; i++) {
        const randomindex = Math.floor(Math.random() * 6 + 1);
        images.push(`<img src="Diceimages/dice${randomindex}.png"`);

    }
    console.log(images);
    const modifiedarray = images.map((diceimage) => {
        return "<div>" + diceimage + "</div";
    })
    ImageResult.innerHTML = modifiedarray.join("");
}


const Clockresult = document.getElementById("Clockresult");

let timer = null;
let starttime = 0;
let elapsedtime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        starttime = Date.now() - elapsedtime;
        timer = setInterval(update, 10);
        isRunning = true;
        sound.currentTime = 0;
        sound.play();
        sound.loop = true;
        soundselector.currentTime = 0;
        soundselector.play();
    }
}
function stop() {
    if (isRunning) {
        elapsedtime = Date.now() - starttime;
        clearInterval(timer)
        isRunning = false;
        sound.pause();
        soundselector.currentTime = 0;
        soundselector.play();
    }
}
function reset() {
    starttime = 0;
    elapsedtime = 0;
    isRunning = false;
    clearInterval(timer);
    Clockresult.textContent = "00:00:00:00";
    soundselector.currentTime = 0;
    soundselector.play();

}
function update() {
    const currenttime = Date.now();
    elapsedtime = currenttime - starttime;


    const hours = Math.floor(elapsedtime / (1000 * 60 * 60)).toString().padStart(2, 0);
    const minutes = Math.floor(elapsedtime / (1000 * 60) % 60).toString()
    const seconds = Math.floor(elapsedtime / 1000 % 60).toString().padStart(2, 0);
    const milliseconds = Math.floor(elapsedtime % 1000 / 10).toString().padStart(2, 0);
    Clockresult.innerHTML = `${hours}:${minutes}:${seconds}:${milliseconds}`
}


const Result1 = document.getElementById("Result1");
const Result2 = document.getElementById("Result2");
const Bquote = document.getElementById("Bquote");

Bquote.onclick = function () {
    let Author = "";
    let Quote = "";
    const qoutearray = ["To love is to Live",
        "To be or not to be",
        "It is I the one who seeks peace",
        "Love thy enemy for love is truth",
        "The love for money is the root of evil",
    ];
    const Authors = ["Larry Page", "Elson Derwick", "Patrick Star", "Alohandro Garnacho", "Leornado DeCaprio"];
    for (let i = 0; i < 1; i++) {
        const randomindex = Math.floor(Math.random() * Authors.length);
        Author += Authors[randomindex];
    }

    for (let i = 0; i < 1; i++) {
        const randomindex = Math.floor(Math.random() * qoutearray.length);
        Quote += qoutearray[randomindex];
    }

    function quote() {
        Result2.texContent = Quote;
    }
    function author(callback) {
        setTimeout(function () {
            Result1.textContent = Author;
            callback();
        }, 3000);
    }
    author(quote);

}
const Display = document.getElementById("Display");
const Greeting = document.getElementById("Greeting");
const section = document.querySelector(".time-section");
const ticker = document.getElementById("clock-sound");

function updateClock() {
    let meridiem = "";
    const currenttime = new Date();

    const hours = currenttime.getHours().toString().padStart(2, 0);
    const minutes = currenttime.getMinutes().toString().padStart(2, 0);
    const seconds = currenttime.getSeconds().toString().padStart(2, 0);
    if (hours <= 12) {
        meridiem = "PM"
    }
    else {
        meridiem = "AM";
    }
    if (hours < 12) {
        Greeting.textContent = "Good Morning🌅"
        section.style.background = "lightskyblue";
    }
    else if (hours > 12) {
        Greeting.textContent = "Good afternoon🌞";
        section.style.background = "orange";
    }
    const timestring = `${hours}:${minutes}:${seconds}:${meridiem}`;
    Display.textContent = timestring;
    ticker.currentTime = 0;
    ticker.loop = true;
    ticker.play();
}
updateClock();
setInterval(updateClock, 1000);




try {
    function students() {
        console.lag("Student 1");
        console.lag("Student 1");
        console.lag("Student 1");
        console.lag("Student 1");
    }
    students();
}
catch (error) {
    console.error(error);
}
function message() {
    setTimeout(function () {
        console.log("You have successfully reached the end of the programm");
        console.log("This message will display after 5 seconds");
    }, 5000);
}
message();