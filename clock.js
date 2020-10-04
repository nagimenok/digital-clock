isMilitary = false;

function displayTime() {
  const time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();

  const session = hour < 12 ? "AM" : "PM";
  const standardTime = hour > 12 ? hour - 12 : hour;
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;
  const clock = document.getElementById("clock");

  isMilitary
    ? (clock.innerHTML = `${hour} : ${minute} : ${second}`)
    : (clock.innerHTML = `${standardTime} : ${minute} : ${second} ${session}`);
}

function displayDate() {
  const date = new Date();

  const weekday = date.toLocaleString("default", { weekday: "long" });
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();

  const dateToday = document.getElementById("date");
  dateToday.innerHTML = `${weekday}, ${month} ${day}, ${year}`

}

displayDate();

const toggle = document.getElementById("toggle-btn");
toggle.addEventListener("click", () => {
  isMilitary = !isMilitary;
  displayTime();
});

setInterval(displayTime, 1000);
