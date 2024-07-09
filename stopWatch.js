let start=document.getElementById('start')
let screen=document.querySelector('.screen')
let hour=document.getElementById('hour')
let minute=document.getElementById('minute')
let second=document.getElementById('second')
let millisecond=document.getElementById('millisecond')

let pause =document.getElementById('stop')
let reset=document.getElementById('reset')
let milliseconds=0, seconds=0, minutes=0, hours =0;
let timeRef;


start.onclick=()=>{
    pause.removeAttribute('disabled')
    reset.removeAttribute('disabled')
    start.setAttribute('disabled','')
    timeValue=setInterval(startTime,10)
    
}
function startTime() {
    milliseconds+=10
    if (milliseconds==1000) {
        milliseconds=0
        seconds+=1
        millisecond.innerText=milliseconds
        if (seconds==60) {
            seconds=0;
            minutes+=1
        }  
        if (minutes==60) {
            minutes=0;
            hours+=1
        }
        if (hours==60) {
            hours=0;
        }
    }

    let h,m,s,ms;
if (hours<10) {
    h='0'+hours
}
else {
    h=hours
}
if (minutes<10) {
    m='0'+minutes
}
else {
    m=minutes
}
if (seconds<10) {
    s='0'+seconds
}
else {
    s=seconds
}
if (milliseconds<10) {
    ms='00'+milliseconds
}
else if (milliseconds<100) {
    ms='0'+milliseconds
}
else {
    ms=milliseconds
}
hour.innerText=h;
minute.innerText=m;
second.innerText=s;
millisecond.innerText=ms;

reset.onclick=()=>{
    resetTimeAndRun()
}
}




pause.onclick=()=>{   
    clearInterval(timeValue);
    reset.onclick=()=>{
        resetTime()
    }
    start.removeAttribute('disabled')
}

// reset.onclick=()=>{
//     resetTime()
// }

function resetTime() {
    clearInterval(timeValue)
    milliseconds=0;
    seconds=0;
    minutes=0;
    hours=0;
    millisecond.innerText='000';
    second.innerText='00';
    minute.innerText='00';
    hour.innerText='00';
}

function resetTimeAndRun() {
    milliseconds=0;
    seconds=0;
    minutes=0;
    hours=0;
    millisecond.innerText='000';
    second.innerText='00';
    minute.innerText='00';
    hour.innerText='00';
}
