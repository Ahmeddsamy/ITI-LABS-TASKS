"use strict";

function sum(a, b) {
  return a + b;
}

function calSum() {
  const num1 = prompt("Enter number 1:");
  const num2 = prompt("Enter number 2:");

  const result = sum(Number(num1), Number(num2));
  console.log(result);
}
