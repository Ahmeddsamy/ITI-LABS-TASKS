"use strict";
// Array of objects representing students and their degrees
const students = [
  { Name: "Ahmed", Degree: 100 },
  { Name: "Mohamed", Degree: 90 },
  { Name: "Samy", Degree: 80 },
  { Name: "Kareem", Degree: 70 },
  { Name: "Amr", Degree: 60 },
  { Name: "Mostafa", Degree: 50 },
  { Name: "Omar", Degree: 40 },
];

// a. Find student Name, who got a degree between 90 and 100 [Use find()]
const nintyToHundred = students.find(function (student) {
  return student.Degree >= 90 && student.Degree <= 100;
});
console.log(
  "a. Students between 90 and 100:",
  nintyToHundred ? nintyToHundred.Name : "All Students are Below 90"
);

// b. Print students' names who got a degree less than 60 [Use filter()]
const filteredStudents = students.filter(function (student) {
  return student.Degree < 60;
});
console.log(
  "b. Students with degree less than 60:",
  filteredStudents.map(function (student) {
    return student.Name;
  })
);

// c. Add a new student to the array [Use push()], and then use for…in to print all elements of the array
const studentsAfterPush = [...students]; // Create a copy
studentsAfterPush.push({ Name: "Ayman", Degree: 30 });
console.log("c. Adding a new student using push:", studentsAfterPush);

// d. Remove the last student of the array [Use pop()], and then use for…of to print all elements of the array
const studentsAfterPop = [...studentsAfterPush]; // Create a copy
studentsAfterPop.pop();
console.log("d. Removing the last student using pop:", studentsAfterPop);

// e. Sort the array alphabetically based on the student name
const studentsAfterSort = [...studentsAfterPop]; // Create a copy
studentsAfterSort.sort(function (a, b) {
  return a.Name.localeCompare(b.Name);
});
console.log("e. Alphabetically sorted array:", studentsAfterSort);

// f. Use splice() function to add 2 new students after the second element of the array. {{{{{{Bonus}}}}}}
const studentsAfterSpliceAdd = [...studentsAfterSort]; // Create a copy
studentsAfterSpliceAdd.splice(
  2,
  0,
  { Name: "Ashmawi", Degree: 20 },
  { Name: "Bakri", Degree: 10 }
);
console.log(
  "f. Adding 2 new students after the second element using splice:",
  studentsAfterSpliceAdd
);

// g. Use splice() function to remove 1 student after the third element in the array {{{{{{Bonus}}}}}}
const studentsAfterSpliceRemove = [...studentsAfterSpliceAdd]; // Create a copy
studentsAfterSpliceRemove.splice(3, 1);
console.log(
  "g. Removing 1 student after the third element using splice:",
  studentsAfterSpliceRemove
);
