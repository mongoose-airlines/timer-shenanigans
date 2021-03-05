const timerEl = document.getElementById('timer');
const winBtn = document.getElementById('winButton');
const winMsg = document.getElementById('message');
const resetBtn = document.getElementById('resetButton');

let timerIntervalId;
let min, sec, seconds = 0;
let winTime = 0;

winBtn.addEventListener('click', () => {
	winBtn.className = "animate__animated animate__bounce";
	if (min < 1) { winMsg.innerText = `YAAAAY, you won in ${sec} seconds!`; }
	else if (min < 2) {winMsg.innerText = `YAAAAY, you won in ${min} minute and ${sec} seconds!`}
	else {winMsg.innerText = `YAAAAY, you won in ${min} minutes and ${sec} seconds!`}
})

resetBtn.addEventListener('click', ()=> {
	startTimer();
	render();
})

startTimer();

function startTimer() {
	if (timerIntervalId) {
		seconds = 0;
		clearInterval(timerIntervalId);
	}
	timerIntervalId = setInterval(tick, 1000);
}

function tick() {
	seconds++
	render();
}

function render() {
	min = Math.floor(seconds / 60);
	sec = seconds % 60;
	if (sec < 10) {
		timerEl.innerText = `${min}:0${sec}`
	} else {
		timerEl.innerText = `${min}:${sec}`
	}
}


