const hh = document.querySelector(".hour");
const mm = document.querySelector(".minute");
const ss = document.querySelector(".second");

function setRotation(){
    const today = new Date;
    const hour = today.getHours();
    const minute = today.getMinutes();
    const second = today.getSeconds();
    ss.style.transform = `rotate(${6*second}deg)`;
    mm.style.transform = `rotate(${6*minute + 0.1*second}deg)`;
    hh.style.transform = `rotate(${30*hour + 0.5*minute + (1/120)*second}deg)`;
}

setInterval(()=>{
    setRotation()
}, 1000);
