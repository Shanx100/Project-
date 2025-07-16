const heart = document.querySelector(".heart");
const audio = document.getElementById("Audio");


heart.addEventListener("animationiteration", () => {
    audio.currentTime = 0;
    audio.onplay();
})