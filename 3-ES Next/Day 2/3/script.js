"use strict";
const arr = [1, 5, 3, 4, 2, 4, 6, 8, 5];
const oddNumbers = arr.filter((i) => i % 2 !== 0);
console.log("Odd Numbers:", oddNumbers);

const arr1 = [1, 5, 3, 4, 2, 4, 6, 8, 5];
console.log("Even Values:");
arr1.forEach((i) => {
  if (i % 2 === 0) {
    console.log(i);
  }
});

const arr2 = [1, 5, 3, 4, 2, 4, 6, 8, 5];
const greater5 = arr2.find((i) => i > 5);
console.log("First Number > 5:", greater5);

const arr3 = [1, 5, 3, 4, 2, 4, 6, 8, 5];
const doubleArray = arr3.map((i) => i * 2);
console.log("Double Array:", doubleArray);
