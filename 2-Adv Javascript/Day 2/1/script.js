"use strict";
function reverseArray() {
  const arr = Array.from(arguments);
  arr.reverse();
  return arr;
}
const reversedArray = reverseArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(reversedArray);

////////////////////////////////////////////////////////////

function reverseSpread(...args) {
  const reversedArray2 = [...args];
  reversedArray2.reverse();
  return reversedArray2;
}
const reversedArray2 = reverseSpread(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(reversedArray2);
