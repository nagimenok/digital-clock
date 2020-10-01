function displayTime() {
    var dTime = new Date();
    var hour = dTime.getHours();
    var minute = dTime.getMinutes();
    var second = dTime.getSeconds();
    var date = dTime.getFullYear()+'-'+dTime.getMonth()+'-'+dTime.getDate();
   

  var session = (hour < 12) ? "AM" : "PM";
  hour = (hour > 12) ? hour - 12 : hour;

  	document.getElementById('date').innerHTML = date;
    document.getElementById('clock').innerHTML = hour + " : " + minute + " : " + second + " " + session;
    var t = setTimeout(displayTime, 1000);
    
}
