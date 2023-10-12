const hh = document.querySelector(".hour");
const mm = document.querySelector(".minute");
const ss = document.querySelector(".second");

function rotation(){
    const today = new Date;
    const hour = today.getHours();
    const minute = today.getMinutes();
    const second = today.getSeconds();
    const hhRotation = 30*hour + minute/2;
    const mmRotation = 6*minute;
    const ssRotation = 6*second;
    hh.style.transform = `rotate(${hhRotation}deg)`;
    mm.style.transform = `rotate(${mmRotation}deg)`;
    ss.style.transform = `rotate(${ssRotation}deg)`;
}

setInterval(()=>{
    rotation();
}, 1000)