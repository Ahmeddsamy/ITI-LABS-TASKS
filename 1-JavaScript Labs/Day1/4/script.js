"use strict";

function checkTemp(temperature, actualFeel) {
  const response =
    temperature >= 25 &&
    temperature <= 30 &&
    actualFeel >= 25 &&
    actualFeel <= 30
      ? "Normal"
      : temperature < 25 && actualFeel < 25
      ? "Cold"
      : temperature > 30 && actualFeel > 30
      ? "Hot"
      : "Ambiguous, can’t detect";

  console.log(response);
}

checkTemp(25, 25); // TEST

//yes it can be used as shown above.

//yes we can use switch case but it will be much longer and it's not recommended since switch case is better used when you are comparing against a single value.
