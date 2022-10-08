const clock = document.querySelector("#clock");
const dateBox = clock.querySelector("#date");
const timeBox= clock.querySelector("#time");


function getClock(){
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDay()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    dateBox.innerText = `${year}/${month}/${day}`;
    timeBox.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);