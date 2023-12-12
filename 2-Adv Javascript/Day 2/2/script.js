"use strict";

function testFunction(p1, p2) {
  if (arguments.length !== 2) {
    throw new Error("More than allowed parameters.");
  }
  return p1 + p2;
}
console.log(testFunction(1, 2));
console.log(testFunction(1, 2, 3));
