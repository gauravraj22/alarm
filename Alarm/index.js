//Selectors
let time = document.getElementById("time");
let selectMenu = document.querySelectorAll("select");
let content = document.querySelector(".content");
var btn = document.getElementById("btn");
let setTime, isAlarmSet = false;
 sound = new Audio("sound.mp3");


//current Time
setInterval(() => {
    ampm = "AM";
    let d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    if (h >= 12) {
        h = h - 12;
        ampm = "PM"
    }
    if (h >= 12) {
        h = h % 12
    }
    h = h == 0 ? h = 12 : h

    if (h < 10) {
        h = "0" + h
    }
    if (m < 10) {
        m = "0" + m
    }
    if (s < 10) {
        s = "0" + s
    }

    time.innerHTML = `${h}:${m}:${s} ${ampm}`;
    if(setTime == `${h}:${m}:${ampm}`){
        sound.play();
    }
    // console.log("sound playing");
    // console.log(h + ":" + m + ":" + s)
}, 1000);


// inserting value of hour/minute/seconds
for (let i = 12; i > 0; i--) {
    if (i < 10) {
        i = "0" + i;
    }
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
    // console.log(i);
}

for (let i = 59; i > 0; i--) {
    if (i < 10) {
        i = "0" + i;
    }
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" :"PM"
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

function set(){
    if(isAlarmSet){
        setTime = "";
        sound.pause();
        btn.innerHTML = "Set Alarm";
        return isAlarmSet = false;
    }


    let AlarmTime = `${selectMenu[0].value}:${selectMenu[1].value}:${selectMenu[2].value}`

    if(AlarmTime.includes("Hour")  || AlarmTime.includes("Minute")  || AlarmTime.includes("AM/PM")){
        alert("Please enter valid time!")
    }
    isAlarmSet = true;
    setTime = AlarmTime;
    btn.innerText = "Clear Alarm";
    // console.log(AlarmTime);
    // sound.play();
}
