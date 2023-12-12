"use strict";
function validateFullName() {
  const fullNameInput = document.getElementById("fullName");
  const fullNameError = document.getElementById("fullNameError");

  if (fullNameInput.value.length < 4 || fullNameInput.value.trim() === "") {
    fullNameError.textContent = "Invalid name";
    fullNameInput.focus();
    fullNameInput.select();
  } else {
    fullNameError.textContent = "";
  }
}

function validatePasswordMatch() {
  const passwordInput = document.getElementById("password");
  const repeatPasswordInput = document.getElementById("repeatPassword");
  const passwordMatchError = document.getElementById("passwordMatchError");

  if (passwordInput.value !== repeatPasswordInput.value) {
    passwordMatchError.textContent = "Passwords do not match";
  } else {
    passwordMatchError.textContent = "";
  }
}

function validateAndSubmit(event) {
  const fullNameInput = document.getElementById("fullName");
  const passwordInput = document.getElementById("password");
  const repeatPasswordInput = document.getElementById("repeatPassword");

  // Validate full name
  const fullNameError = document.getElementById("fullNameError");
  if (fullNameInput.value.length < 4 || fullNameInput.value.trim() === "") {
    fullNameError.textContent = "Invalid name";
    fullNameInput.focus();
    fullNameInput.select();
    event.preventDefault(); // Prevent form submission
    return;
  } else {
    fullNameError.textContent = "";
  }

  // Validate password
  const passwordMatchError = document.getElementById("passwordMatchError");
  if (passwordInput.value !== repeatPasswordInput.value) {
    passwordMatchError.textContent = "Passwords do not match";
    repeatPasswordInput.focus();
    event.preventDefault(); // Prevent form submission
    return;
  } else {
    passwordMatchError.textContent = "";
  }

  // If validation passes, submit the form
  alert("Form submitted successfully!");
  // document.getElementById("registrationForm").submit(); // Uncomment this line to submit the form
}
