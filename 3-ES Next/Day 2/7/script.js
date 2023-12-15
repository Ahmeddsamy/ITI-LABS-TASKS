"use strict";
var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

// a. test that every i in the given array is a string
var strings = fruits.every(function (i) {
  return typeof i === "string";
});

console.log(strings);

// b. test that some of array elements start with "a"
var includesA = fruits.some(function (i) {
  return i.startsWith("a");
});

console.log(includesA);

// c. generate a new array filtered from the given array with only elements that start with "b" or "s"
var filter = fruits.filter(function (i) {
  return i.startsWith("b") || i.startsWith("s");
});
console.log(filter);
// d. use forEach to display all elements of the new array from the previous point
filter.forEach(function (i) {
  console.log(i);
});
