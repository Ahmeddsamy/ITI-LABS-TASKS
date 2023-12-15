"use strict";
const students = new Set();
students.add("Ahmed");
students.add("Samy");
students.add("Nashaat");
students.add("Samy");
console.log("Spread operator:", [...students]);
console.log("forof loop:");
for (const i of students) {
  console.log(i);
}
