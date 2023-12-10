"use strict";

function temp(temperature) {
  const response = temperature >= 30 ? "HOT" : "Cold";
  console.log(response);
}

temp(32); // TEST
