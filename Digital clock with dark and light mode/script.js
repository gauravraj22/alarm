let CurrentTime = document.getElementById("time");
let ampm="";

setInterval(() => {
    ampm = "AM";
    let date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();
    if (hour >= 12){
        hour = hour-12;
        ampm = "PM";
    }
    if(hour>12){
        hour=hour%12
    }
    hour = hour == 0 ? hour = 12 : hour

    if(hour < 10){
        hour = "0" + hour;
    }
    if(minute < 10){
        minute = "0" + minute;
    }
    if(second < 10){
        second = "0" + second;
    }
    CurrentTime.innerHTML = `${hour}:${minute}:${second} ${ampm}`;
},1000)

var icon = document.getElementById("icon");

icon.addEventListener("click", theme)

function theme(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "sun.png";
    }else{
        icon.src = "moon.png";
    }
}