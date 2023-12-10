"use strict";

function check(faculty) {
  switch (faculty) {
    case "FCI":
      console.log("You’re eligible to Programing tracks");
      break;
    case "Engineering":
      console.log("You’re eligible to Network and Embedded tracks");
      break;
    case "Commerce":
      console.log("You’re eligible to ERP and Social media tracks");
      break;
    default:
      console.log("You’re eligible to SW fundamentals track");
  }
}

check("Engineering"); // TEST

// it's better because we are comparing against a single value
