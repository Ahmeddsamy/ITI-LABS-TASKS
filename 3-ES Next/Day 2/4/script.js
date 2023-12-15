"use strict";
function* tipGenerator() {
  const tips = [
    "Use `const` and `let`: Always use `const` for variables that won't be reassigned and `let` for those that will. This helps prevent accidental reassignments and adds clarity to your code.",
    "Embrace Arrow Functions: Arrow functions provide a concise syntax and inherit the `this` value from their containing scope. They are especially useful for short, simple functions.",
    "Destructuring Assignment: Take advantage of destructuring to extract values from arrays or properties from objects in a concise way. It can make your code cleaner and more readable.",
    "Template Literals: Use template literals for string interpolation. They offer a more readable and convenient way to embed expressions inside strings.",
    "Learn the Spread Operator: The spread operator (`...`) is powerful for shallow copying arrays, merging arrays, and spreading elements in function arguments.",
    "Understand Closures: Closures allow functions to access variables from their outer scope even after the outer function has finished executing. This is a powerful concept in JavaScript.",
    "Promises for Asynchronous Operations: Use Promises for better handling of asynchronous operations. They provide a cleaner alternative to callback functions, improving code readability.",
    "Avoid Global Variables: Minimize the use of global variables to reduce the risk of naming conflicts and unintended side effects. Encapsulate your code within functions or modules.",
    "Truthy and Falsy Values: Understand the concept of truthy and falsy values. This knowledge is crucial for writing concise and effective conditional statements.",
    "Explore ES6+ Features: Stay updated with the latest ECMAScript features. Features introduced in ES6 and later versions enhance the language's capabilities and make your code more modern and maintainable.",
  ];
  for (const i of tips) {
    yield i;
  }
}
const tipGen = tipGenerator();
function display() {
  const tips = document.getElementById("tip");
  tips.innerHTML = "";

  for (const i of tipGen) {
    const tipdiv = document.createElement("p");
    tipdiv.textContent = i;
    tips.appendChild(tipdiv);
  }
}
tipGen = tipGenerator();
function display3sec() {
  const tips = document.getElementById("tip");
  tips.innerHTML = "";

  setInterval(() => {
    const tip = tipGen.next().value;

    if (tip) {
      const tipdiv = document.createElement("p");
      tipdiv.textContent = tip;
      tips.innerHTML = "";
      tips.appendChild(tipdiv);
    }
  }, 3000);
}
