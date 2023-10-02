const timer = document.getElementById('timer');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let seconds = 0;
let interval = null;



function time(){
    seconds ++;


    let hrs = Math.floor(seconds / 3600);   
    let mins = Math.floor((seconds -(hrs * 3600)) / 60);
    let secs = seconds % 60;

     
    if (secs < 10)secs = "0" + secs;
    if (mins < 10)mins = "0" + mins;
    if (hrs < 10)hrs = "0" + hrs;

    timer.innerText = `${hrs}:${mins}:${secs}`;
   
}

// time();

function start1(){
    if(interval){
        return
    }

    interval = setInterval(time, 1000);
}

function stop1(){
   clearInterval(interval);
   interval = null;


}

function reset1(){
    // stop();
    seconds = 0;
    timer.innerText = "00:00:00";
}

start.addEventListener('click', start1);
stop.addEventListener('click', stop1);
reset.addEventListener('click', reset1);
