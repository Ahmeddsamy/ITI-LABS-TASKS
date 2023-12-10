"use strict";
function showDate() {
  const date = new Date();
  document.getElementById(
    "dateTime"
  ).textContent = `Current Date and Time: ${date}`;
}
