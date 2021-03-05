const timerEl = document.getElementById('timer')
const resetBtn = document.getElementById('resetButton')
const startBtn = document.getElementById('startButton')
const secBar = document.getElementById('seconds')
const minBar = document.getElementById('minutes')
const hrBar = document.getElementById('hours')

let timerIntervalId
let hr, min, sec, seconds = 0

startBtn.addEventListener('click', ()=> {
  startBtn.textContent = (startBtn.textContent === "Start") ? "Pause" : "Start"
  if (timerIntervalId) {
    clearInterval(timerIntervalId)
    timerIntervalId = null
    return
  }
  startTimer();
})

resetBtn.addEventListener('click', ()=> {
  startBtn.textContent = "Start"
  clearInterval(timerIntervalId)
  seconds = 0
  timerIntervalId = null
  render()
})

function tick() {
  seconds++
  console.log(seconds)
  render()
}

function startTimer(){
  timerIntervalId = setInterval(tick, 1000)
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