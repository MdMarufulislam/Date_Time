function watch(){

var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var time_zone = "AM";
if(hours>12){
    hours = hours -12;
}
 if(hours=>12){
    time_zone="PM";
}
if(hours < 10){
    hours = "0" + hours;
}

if(minutes < 10){
    minutes ="0" + minutes;
} 

if(seconds < 10){
    seconds = "0" + seconds;
}



document.querySelector(".houre").innerHTML=hours;
document.querySelector(".minutes").innerHTML=minutes;
document.querySelector(".seconds").innerHTML=seconds;
document.querySelector(".time_zone").innerHTML=time_zone;

setInterval("watch()", 1000);
}watch()