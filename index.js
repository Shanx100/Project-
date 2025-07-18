const Clock = document.getElementById("Clock");


function updateClock() {
    const currrenttime = new Date();
    const hours = currrenttime.getHours().toString().padStart(2, 0);
    const minutes = currrenttime.getMinutes().toString().padStart(2, 0);
    const seconds = currrenttime.getSeconds().toString().padStart(2, 0);
    const timestring = `${hours}:${minutes}:${seconds}`
    Clock.textContent = timestring;
}
updateClock();
setInterval(updateClock, 1000);