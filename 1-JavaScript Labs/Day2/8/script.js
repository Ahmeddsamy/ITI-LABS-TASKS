"use strict";

function date(input) {
  return (
    input.length === 10 && input.charAt(2) === "-" && input.charAt(5) === "-"
  );
}

function showDate() {
  const userInput = prompt("Enter your birth date (DD – MM – YYYY):");

  if (userInput !== null && date(userInput.trim())) {
    const day = parseInt(userInput.substring(0, 2), 10);
    const month = parseInt(userInput.substring(3, 5), 10) - 1;
    const year = parseInt(userInput.substring(6), 10);

    const birthDate = new Date(year, month, day);

    alert("Birth Date: " + birthDate.toDateString());
  } else {
    alert("Wrong Date Format.");
  }
}
