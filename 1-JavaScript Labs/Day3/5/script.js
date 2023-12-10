"use strict";

var popupWindow;

function openPopup() {
  // Open a new popup window after 3 seconds
  setTimeout(function () {
    popupWindow = window.open("", "_blank", "width=600,height=400");

    // Write paragraphs on the popup window
    if (popupWindow) {
      popupWindow.document.write("<h2>This is a Popup Window</h2>");
      popupWindow.document.write(
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo id metus congue accumsan.</p>"
      );
      popupWindow.document.write(
        "<p>Proin tristique tincidunt metus, id vulputate justo tincidunt vel.</p>"
      );
      popupWindow.document.write(
        "<p>Nulla facilisi. Aenean facilisis, nisi id ultrices tempor, nisl felis accumsan elit, nec blandit felis ligula id justo.</p>"
      );

      // Add a link to close the popup
      popupWindow.document.write(
        '<p><a href="#" onclick="closePopup()">Close Popup</a></p>'
      );
    } else {
      alert("Popup blocked. Please enable popups for this site.");
    }
  }, 3000);
}

function closePopup() {
  // Close the popup window
  if (popupWindow && !popupWindow.closed) {
    popupWindow.close();
  } else {
    alert("Popup is not open or has been closed.");
  }
}
