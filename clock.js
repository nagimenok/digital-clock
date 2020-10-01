function displayTime() {
    var dTime = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var seconds = now.getSeconds();
   
  var session = (hour < 12) ? "AM" : "PM";
    
   hour = (hour > 12) ? hours - 12 : hours;


    document.getElementById('clock').innerHTML = hour + " : " + minutes + " : " + seconds + " " + session;
    var t = setTimeout(displayTime, 1000);
    
}
