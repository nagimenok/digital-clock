function displayTime() {
    var dTime = new Date();
    var hour = now.getHours(); // 0 - 23
    var minute = now.getMinutes(); // 0 - 59
    var seconds = now.getSeconds(); // 0 - 59
   
  var session = (hour < 12) ? "AM" : "PM";
    
   hour = (hour > 12) ? hours - 12 : hours;


    document.getElementById('clock').innerHTML = hour + " : " + minutes + " : " + seconds + " " + session;
    var t = setTimeout(displayTime, 1000);
    
}
