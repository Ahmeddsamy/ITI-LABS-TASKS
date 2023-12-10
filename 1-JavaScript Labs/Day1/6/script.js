"use strict";
function oddNumbers(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

oddNumbers(1, 20); // TEST
