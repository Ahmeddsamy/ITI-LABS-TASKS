"use strict";

const studentGrades = [60, 100, 10, 15, 85];

const sortedGrades = studentGrades.sort((a, b) => b - a);

const highestDegree = sortedGrades.find((grade) => grade <= 100);

const gradesBelow60 = sortedGrades.filter((grade) => grade < 60);

console.log(sortedGrades);
console.log(highestDegree);
console.log(gradesBelow60);
