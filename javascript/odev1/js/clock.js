 var theName = prompt("Adınızı giriniz:");
 var yazdir = document.getElementById("myName");
 yazdir.innerHTML = theName;

function timeFunction(){
    const gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    var myDate = new Date();
    
    var hour = myDate.getHours();
    if(hour<10)hour="0"+hour;

    var minute = myDate.getMinutes();
    if(minute<10)minute="0"+minute;

    var seconds = myDate.getSeconds();
    if(seconds<10)seconds="0"+seconds;
    
    var theDay = gunler[myDate.getDay()];

    document.getElementById("myClock").innerHTML = `${hour}:${minute}:${seconds}  ${theDay}`
    
}
   setInterval(timeFunction,1000) 