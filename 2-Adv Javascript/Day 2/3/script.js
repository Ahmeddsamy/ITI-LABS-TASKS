"use strict";

function addNumbers(...numbers) {
  if (numbers.length === 0) {
    throw new Error("Write a number");
  }

  let sum = 0;

  for (const num of numbers) {
    if (typeof num !== "number" || isNaN(num)) {
      throw new Error("Invalid input, numbers only");
    }
    sum += num;
  }

  return sum;
}

console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(addNumbers("hello"));
