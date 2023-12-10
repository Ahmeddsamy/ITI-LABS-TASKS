"use strict";

function calc() {
  const expression = prompt("Enter math expression:");
  const result = eval(expression);
  alert(`You entered: ${expression}, and the result is: ${result}`);
}
