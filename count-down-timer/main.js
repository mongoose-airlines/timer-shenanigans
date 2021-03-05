let timeLeft= 10;

let timer = setInterval(function() {
    document.getElementById('countdown').textContent = timeLeft + ' seconds remaining.';
    timeLeft -= 1;
    if (timeLeft < 0) {
        document.getElementById('countdown').textContent = 'Finished!'
    }

}, 1000)