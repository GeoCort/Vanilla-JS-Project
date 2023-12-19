let min= document.getElementById('mins')
let hour = document.getElementById("hours")
let day = document.getElementById("days")
let sec = document.getElementById("seconds");

function timeFormat(s){
    return s < 10 ? `0${s}` : s 

}
function countdown(){
    let time = new Date("1 jan 2024")
    let today = new Date();
    let totalSeconds =  (time - today) /1000// total milliseconds from our projected day - current day
    day.innerHTML = `${timeFormat(Math.floor(totalSeconds / 3600 / 24))}`
    hour.innerHTML = `${timeFormat(Math.floor(totalSeconds / 3600) % 24) }`  // remainder of the days 
    min.innerHTML = `${timeFormat(Math.floor(totalSeconds / 60)  %60)}`
    sec.innerHTML = `${timeFormat(Math.floor(totalSeconds) %60)}`
}

countdown();

setInterval(countdown,1000);
