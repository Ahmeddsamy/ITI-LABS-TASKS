"use strict";
const Sequence = function (start, end, step) {
  let sequence = [];
  const fillSequence = function () {
    for (let i = start; i <= end; i += step) {
      sequence.push(i);
    }
  };

  fillSequence();

  Object.defineProperty(this, "sequence", {
    writable: false,
    value: start,
    enumerable: true,
    configurable: false,
  });

  this.appendValue = function (newValue) {
    if (sequence.indexOf(newValue) !== -1) {
      throw new Error("Duplicated value");
    }
    if (newValue !== sequence[sequence.length - 1] + step) {
      throw new Error("Value not sequential.");
    }

    sequence.push(newValue);
  };

  this.popValue = function () {
    if (sequence.length === 0) {
      throw new Error("array is empty");
    }

    return sequence.pop();
  };

  this.toString = function () {
    return `Sequence [${sequence.join(", ")}]`;
  };

  Object.seal(this);
};

const obj1 = new Sequence(1, 20, 2);
console.log(obj1.toString());

obj1.appendValue(21);
console.log(obj1.toString());

obj1.popValue();
console.log(obj1.toString());
