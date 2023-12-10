"use strict";

let uName, birthYear, age;

do {
  uName = prompt("Enter your name:");
} while (!uName || typeof uName !== "string");

do {
  birthYear = prompt("Enter your birth year: (you must be atleast 14)");
} while (!birthYear || isNaN(birthYear) || birthYear >= 2010);

age = new Date().getFullYear() - birthYear;

document.write(`<p><u><b>Name:</b></u> ${uName}</p>`);
document.write(`<p><u><b>Birth Year:</b></u> ${birthYear}</p>`);
document.write(`<p><u><b>Age:</b></u> ${age}</p>`);
