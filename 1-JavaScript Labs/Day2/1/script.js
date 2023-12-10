"use strict";
const tips = [
  "Consider using 'template literals' for string interpolation.",
  "Take advantage of destructuring in object and array assignments.",
  "Use the 'spread' operator to clone arrays and objects.",
  "Utilize the 'fetch' API for making HTTP requests in a modern way.",
  "Practice defensive programming to handle unexpected situations.",
  "Explore the 'Proxy' object for advanced object manipulation.",
  "Take advantage of 'localStorage' and 'sessionStorage' for client-side storage.",
  "Use 'async/await' for cleaner asynchronous code.",
  "Consider using 'module' syntax for modularizing your JavaScript code.",
  "Implement error handling in your code for better debugging.",
  "Master the use of 'console' methods for effective debugging.",
];

function showTip() {
  const random = Math.trunc(Math.random() * tips.length);
  document.getElementById("tip").textContent = tips[random];
}

showTip();
