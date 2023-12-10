"use strict";
var score = 0;

function click() {
  score++;
  alert("Score: " + score);
}

document.getElementById("image1").addEventListener("click", click);
document.getElementById("image2").addEventListener("click", click);
document.getElementById("image3").addEventListener("click", click);

setTimeout(function () {
  document.getElementById("image1").removeEventListener("click", click);
  document.getElementById("image2").removeEventListener("click", click);
  document.getElementById("image3").removeEventListener("click", click);

  function gameOver() {
    alert("Game Over");
  }

  document.getElementById("image1").addEventListener("click", gameOver);
  document.getElementById("image2").addEventListener("click", gameOver);
  document.getElementById("image3").addEventListener("click", gameOver);
}, 3000);
