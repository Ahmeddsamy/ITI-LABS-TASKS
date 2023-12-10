"use strict";
var textbox = document.getElementById("textbox");

textbox.addEventListener("keydown", function (event) {
  alert("Key pressed " + event.key);
});

textbox.addEventListener("mousedown", function (event) {
  var mouseButton = mouseButton(event.button);
  alert("Mouse button clicked " + mouseButton);
});

function mouseButton(button) {
  switch (button) {
    case 0:
      return "Left";
    case 1:
      return "Middle";
    case 2:
      return "Right";
    default:
      return "Unknown";
  }
}

var clockInterval;
var clockRunning = false;

function startClock() {
  if (!clockRunning) {
    alert("Clock Started");
    clockRunning = true;
    updateClock();
    clockInterval = setInterval(updateClock, 1000);
  }
}

function updateClock() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  var formattedTime =
    formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);

  document.getElementById("clockDisplay").textContent = formattedTime;
}

function formatTime(value) {
  return value < 10 ? "0" + value : value;
}

document.addEventListener("keydown", function (event) {
  if (event.altKey && event.key === "w") {
    clearInterval(clockInterval);
    clockRunning = false;
    alert("Clock Stopped");
  }
});
