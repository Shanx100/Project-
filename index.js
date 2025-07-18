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

    if (name1 === "" & name2 === "") {
        window.alert("Please make sure to fill in the required info to find your soulmate🥰🥰");
        return;
    }

    resultscontainer.style.display = "flex";
    Result.style.display = "none";
    ResultList.textContent = "Loading...";

    let player1info = [];
    let player2info = [];





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




    setTimeout(() => {
        ResultList.textContent = "";
        for (let letter of firstname) {
            if (secondname.includes(letter) & !matches.includes(letter)) {
                matches.push(letter);
            }
        }
        if (matches.length > 0) {

            Showmessage.textContent = "Congrats🥳🥳You are a match";
            setTimeout(() => {
                Showmessage.textContent = "";
                heart.style.display = "flex";
                heartsound.loop = true;
                heartsound.currentTime = 0;
                heartsound.play();
            }, 3000);
        }
        else {

            Showmessage.textContent = "Sorry!You could not match😥😥";
        }



    }, 4000);


});





