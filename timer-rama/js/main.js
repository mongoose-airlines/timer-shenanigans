const timerEl = document.getElementById('timer')
const resetBtn = document.getElementById('resetButton')
const startBtn = document.getElementById('startButton')
const secBar = document.getElementById('seconds')
const minBar = document.getElementById('minutes')
const hrBar = document.getElementById('hours')

let timerInterval
let hr, min, sec, seconds = 0

startBtn.addEventListener('click', ()=> {
    if (timerInterval) {
    clearInterval(timerInterval)
    return timerInterval = null
   }
    startTimer();
})

resetBtn.addEventListener('click', ()=> {
    clearInterval(timerInterval)
    seconds = 0
    clearInterval(timerInterval)
    render()
    return timerInterval = null
})

function tick() {
    seconds++
    console.log(seconds)
    if (seconds === 0){
        clearInterval(timerInterval)
    }
    render()
}

function startTimer(){
    clearInterval(timerInterval)
    timerInterval = setInterval(tick, 1000)
}

function render() {
    min = Math.floor(seconds / 60);
    hr = Math.floor(seconds / 3600);
    sec = seconds % 60;
    min = min % 60;
    hr = hr % 24;
    if (sec < 10) {
        timerEl.innerText = `${min}:0${sec}`
    } else {
        timerEl.innerText = `${min}:${sec}`
    }
    secBar.style = `width: ${sec/60*100}%`
    secBar.innerText = sec;
    minBar.style = `width: ${(min/60*100)}%`
    minBar.innerText = min;
    hrBar.style = `width: ${(hr/24*100)}%`
    hrBar.innerText = hr;
}