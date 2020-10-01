function displayTime() {
    var dTime = new Date();
    var hour = dTime.getHours();
    var minute = dTime.getMinutes();
    var second = dTime.getSeconds();
    // var date = dTime.getFullYear()+'-'+dTime.getMonth()+'-'+dTime.getDate();
    var date = dTime.getDate()
    var year = dTime.getFullYear()
   

  var session = (hour < 12) ? "AM" : "PM";
  hour = (hour > 12) ? hour - 12 : hour;

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const monthIndex = dTime.getMonth()
const monthName = months[monthIndex]
console.log(monthName)

const weekdays = [
'Monday', 
'Tuesday', 
'Wednesday', 
'Thursday', 
'Friday', 
'Saturday', 
'Sunday'
]

const dateIndex = dTime.getDate();
const dateName = weekdays[dateIndex];
console.log(dateName);

  	document.getElementById('date').innerHTML = dateName + ", " + monthName + " " + date + ", " + year;
    document.getElementById('clock').innerHTML = hour + " : " + minute + " : " + second + " " + session;
    var t = setTimeout(displayTime, 1000);
    
}
