"use strict";

function Rectangle(width, height) {
  this.height = height;
  this.width = width;

  this.calArea = function () {
    return this.width * this.height;
  };

  this.displayInfo = function () {
    const area = this.calArea();
    console.log(`Rectangle Info:
Height: ${this.height}
Width: ${this.width}
Area: ${area}`);
  };
}

const Rec1 = new Rectangle(5, 8);

Rec1.displayInfo();
