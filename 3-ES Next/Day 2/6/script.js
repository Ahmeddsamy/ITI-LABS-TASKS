"use strict";
function courseInfo(courseInfo = {}) {
  const {
    courseName = "ES6",
    courseDuration = "3 days",
    courseOwner = "JavaScript",
  } = courseInfo;

  console.log("Course Name:", courseName);
  console.log("Course Duration:", courseDuration);
  console.log("Course Owner:", courseOwner);
}

courseInfo();
