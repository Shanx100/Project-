const GamestartContainer = document.querySelector(".start-game");
const formcontainer = document.querySelector(".form-container");
const Result = document.getElementById("Result");
const Begin = document.getElementById("Begin");
const sound = document.getElementById("sound");


Begin.addEventListener("click", () => {
    formcontainer.style.display = "flex";
    GamestartContainer.style.display = "none";
    Result.style.display = "block";
    sound.loop = true;
    sound.currentTime = 0;
    sound.play();
    setTimeout(() => {
        window.alert("Both players should fill in the input boxes provided below to find your Soulmate🥰🥰");
    }, 5000);

});


const ResultList = document.getElementById("LoadingResults");
const heart = document.querySelector(".heart");
const heartsound = document.getElementById("heart-sound");
const resultscontainer = document.querySelector(".resultscontainer");
const Inputsound = document.querySelectorAll(".Inputsound")
const Selectkeys = document.getElementById("Selectkeys");

Inputsound.forEach(input => {
    input.addEventListener("focus", () => {
        Selectkeys.play();
    })
})




Result.addEventListener("click", () => {


    let player1info = [];
    let player2info = [];
    const Showmessage = document.getElementById("Showmessage");

    const name1 = document.getElementById("name1").value;

    const date1 = document.getElementById("date1").value;
    const year1 = document.getElementById("year1").value;
    const month1 = document.getElementById("month1").value;
    const day1 = document.getElementById("day1").value;
    const hour1 = document.getElementById("hour1").value;


    const name2 = document.getElementById("name2").value;
    const year2 = document.getElementById("year2").value;
    const date2 = document.getElementById("date2").value;
    const month2 = document.getElementById("month2").value;
    const day2 = document.getElementById("day2").value;
    const hour2 = document.getElementById("hour2").value;


    resultscontainer.style.display = "flex";
    Result.style.display = "none";
    ResultList.textContent = "Loading...";


    player1info.push(name1);
    player1info.push(year1);
    player1info.push(month1);
    player1info.push(day1);
    player1info.push(date1);
    player1info.push(hour1);

    player2info.push(name2)
    player2info.push(year2);
    player2info.push(month2);
    player2info.push(day2);
    player2info.push(date2);
    player2info.push(hour2);

    const firstname = name1.toLowerCase();
    const secondname = name2.toLowerCase();

    let matches = []

    for (let letter of firstname) {
        if (secondname.includes(letter) & !matches.includes(letter)) {
            matches.push(letter);
        }
    }
    if (matches.length > 0) {
        ResultList.textContent = "";
        Showmessage.textContent = "Congrats🥳🥳You are a match"
    }
    else {
        ResultList.textContent = "";
        Showmessage.textContent = "Sorry!You could not match😥😥";
    }



})





