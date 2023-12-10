"use strict";

function openScrollingPage() {
  var scrollingWindow = window.open(
    "scrolling.html",
    "_blank",
    "width=600,height=600"
  );

  if (scrollingWindow) {
    scrollingWindow.focus();
  } else {
    alert("Popup blocked. Please enable popups for this site.");
  }
}

var firstNameInput = document.getElementById("firstName");

firstNameInput.addEventListener("input", function () {
  var sanitizedValue = this.value.replace(/[^A-Za-z]/g, "");
  this.value = sanitizedValue;
});
