"use strict";

function check() {
  const email = prompt("Enter your Email:");

  const index = email.indexOf("@");
  const valid = index > 0 && index < email.length - 1;

  if (valid) {
    alert("Email is valid.");
  } else {
    alert("Email is not valid.");
  }
}

check();
