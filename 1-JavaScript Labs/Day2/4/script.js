"use strict";

let fullName = function () {
  const nameCriteria = /^[a-zA-Z]{3,}(\s[a-zA-Z]{3,})*$/;

  do {
    fullName = prompt("Enter your full name:");
  } while (!nameCriteria.test(fullName));

  alert("Full Name is valid");
};
let email = function () {
  const emailCriteria =
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com\.eg|net\.eg|edu\.eg|org\.eg)$/i;

  do {
    email = prompt("Enter Email (.eg domain only):");
  } while (!emailCriteria.test(email));

  alert("Email is valid");
};

fullName();
email();
