"use strict";

let students = new Map([
  [
    "Ahmed",
    {
      Grades: [
        { Course: "Math", Grade: "95" },
        { Course: "English", Grade: "90" },
        { Course: "History", Grade: "100" },
      ],
    },
  ],
  [
    "Samy",
    {
      Grades: [
        { Course: "Math", Grade: "100" },
        { Course: "English", Grade: "100" },
        { Course: "History", Grade: "90" },
      ],
    },
  ],
]);
students.forEach((grade, name) => {
  console.log(`${name}'s Grades:`);
  grade.Grades.forEach((course) => {
    console.log(`${course.Course}: ${course.Grade}`);
  });
});
