const display = document.getElementById("Clockresult");
const sound = document.getElementById("sound");

let timer = null;
let starttime = 0;
let elapsedtime = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    starttime = Date.now() - elapsedtime;
    timer = setInterval(update, 10);
    isRunning = true;
    sound.currenttime = 0;
    sound.loop = true;
    sound.play();
  }
}
function stop() {
  if (isRunning) {
    clearInterval(timer);
    elapsedtime = Date.now() - starttime;
    isRunning = false;
    sound.loop = false;
    sound.pause();

  }
}

function reset() {
  clearInterval(timer);
  starttime = 0;
  elapsedtime = 0;
  isRunning = false;
  display.textContent = `00:00:00:00`;
  sound.loop = false;
  sound.currenttime = 0;
  sound.pause;
}

function update() {
  const currenttime = Date.now();
  const elapsedtime = currenttime - starttime;

  const hours = Math.floor(elapsedtime / (1000 * 60 * 60 * 60)).toString().padStart(2, 0);
  const minutes = Math.floor(elapsedtime / (1000 * 60) % 60).toString().padStart(2, 0);
  const seconds = Math.floor(elapsedtime / (1000) % 60).toString().padStart(2, 0);
  const milliseconds = Math.floor(elapsedtime % 1000 / 10).toString().padStart(2, 0);

  display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}