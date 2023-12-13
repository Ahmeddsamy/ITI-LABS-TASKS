"use strict";

// Q1
console.log("Q1:-");
let arr = ["Ahmed", "Samy", "Nashaat"];
for (var i in arr) {
  console.log(arr[i]);
}

for (var i of arr) {
  console.log(i);
}
arr.forEach(function (i) {
  console.log(i);
});

console.log("//////////////////////////////////////");
// Q2
console.log("Q2:-");

let arr1 = [0, 1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];
console.log(arr2);

console.log("//////////////////////////////////////");
// Q3
console.log("Q3:-");

var student = {
  Name: "Ahmed",
  Age: null,
  Faculty: "Engineering",
  University: "AAST",
  FinalGrade: "95",
};

console.log(
  `My Name is ${student.Name}, i studied ${student.Faculty} at ${student.University}, i graduated with ${student.FinalGrade} point`
);

console.log("//////////////////////////////////////");
// Q4
console.log("Q4:-");

let str = "hello";
function check() {
  str.includes("e")
    ? console.log(`${str} includes letter e`)
    : console.log(`${str} does not include letter e`);
}
check();

console.log("//////////////////////////////////////");
// Q5
console.log("Q5:-");
//refer to Q3 to find the object
student.Age = student.Age ?? "Default value";
console.log(student);

console.log("//////////////////////////////////////");
// Q6
console.log("Q6:-");

let {
  title,
  translations: [{ localization_tags }],
} = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localization_tags: ["de-gen", "de-or"],
      last_edit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      titles: "JavaScript-Umgebung",
    },
  ],
};
console.log(title, localization_tags);
