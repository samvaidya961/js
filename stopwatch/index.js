let min = 0;
let sec = 0;

let minstext = document.getElementById('mins');
let secstext = document.getElementById('secs');

const startbtn = document.getElementById('start');
const stopbtn = document.getElementById('stop');
const resetbtn = document.getElementById('reset');

let Interval;

startbtn.addEventListener("click", function () {
    clearInterval(Interval);
    Interval = setInterval(start, 1000);
})

stopbtn.addEventListener("click", function () {
    clearInterval(Interval);
})

resetbtn.addEventListener("click", function () {
    clearInterval(Interval);
    min = "00";
    sec = "00";
    minstext.textContent = min;
    secstext.textContent = sec;
})

function start() {

    sec++;

    if (sec < 10) {
        secstext.textContent = "0" + sec;
    }
    if (sec >= 10) {
        secstext.textContent = sec;
    }
    if (sec > 59) {
        min++;
        minstext.textContent = "0" + min;
        sec = 0;
        secstext.textContent = "0" + 0;
    }
    if (min > 10) {
        minstext.textContent = min;
    }
}

