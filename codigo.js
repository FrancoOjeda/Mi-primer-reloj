const hours = document.createElement("span");
const minutes = document.createElement("span");
const seconds = document.createElement("span");

function reloj(){

let hora = document.getElementById("hora")

let min = document.getElementById("min");

let sec = document.getElementById("sec");

let date = new Date()

hours.innerText = date.getHours()
hora.appendChild(hours);

minutes.innerText = date.getMinutes()
min.appendChild(minutes);

seconds.innerText = date.getSeconds()
sec.appendChild(seconds);

if (hours.innetText<10) {
    hours.innetText = "0"+hours.innetText;
}

if (minutes.innerText<10) {
    minutes.innerText= "0"+minutes.innerText
}
if (seconds.innerText<10) {
    seconds.innerText="0"+seconds.innerText
}

}

setInterval(
    reloj
),1000;