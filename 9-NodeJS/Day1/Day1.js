// 1
function ageDays(ageYears) {
  return ageYears * 365;
}

// 2
function findSmallest(arr) {
  return Math.min(...arr);
}

// 3
function sortDescending(number) {
  return parseInt(
    number
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

// 4
function calcAverage(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

// 5
// the output will be false since javascript compare arrays and object by memory refrence not value and each array and object is located diffrently in the memory

// 6
// output will be A then C then B since a will be the first function that excutes then when the settimeout functions excutes it will be placed in the event queue until the execution stack is finished which still has the C function

// 7
// output will be 10 since var can be re declared without error and it will take the latest value

// 8
//output will be undfined and a refrence error will occur since fName will be hoisted to the parent scope since it uses var declaration so it will be undefined, while age is not hoisted at all so it will throw a refrence error

// 9 Node Task //
// write data to JSON
const fs = require("fs");
const users = [
  { fName: "Ahmed", lName: "Samy" },
  { fName: "Kareem", lName: "Hassan" },
  { fName: "Amr", lName: "Ibrahim" },
];

fs.writeFile("test.json", JSON.stringify(users, null, 2));

// read data from JSON
const data = fs.readFile("test.json", "utf8");
const usersList = JSON.parse(data);
console.log(usersList);

// delete JSON
fs.unlink("test.json");
