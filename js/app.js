document.addEventListener("DOMContentLoaded", function(){

const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");

function setDate(){
    const newDate = new Date();
    const sec = newDate.getSeconds();
    const degrees = ((sec/60)*360)+90;
    console.log(sec);
    seconds.style.transform = `rotate(${degrees}deg)`;
    const min = newDate.getMinutes();
    const degMin = ((min/60)*360)+90;
    minutes.style.transform = `rotate(${degMin}deg)`;
    const hou = newDate.getHours();
    const degHours = ((hou/12)*360)+90;
    hours.style.transform = `rotate(${degHours}deg)`;
    };
    setInterval(setDate, 1000);



























});
