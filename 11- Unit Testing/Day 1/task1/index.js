//Choose just one function from these 3
// TODO: All test cases should pass (fix the functions if needed).

//problem 1
/**
 * @return {string} the string after capitalizing every word's first character.
 * @param {string} text the string to capitalize every word's first character in.
 * @example capitalizeTextFirstChar("i'm ahmed ali") ===> "I'm Ahmed Ali"
 * @example capitalizeTextFirstChar(12) ===> throw an error
 */

// capitalizeTextFirstChar.js
const capitalizeTextFirstChar = (text) => {
  if (typeof text !== "string") {
    throw new TypeError("input should be a string");
  } else {
    return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
};
module.exports = { capitalizeTextFirstChar };
// test cases:
/* 
1-test that the function takes a string it will return type to be a string
2-test that the function takes a string and return it after capitalize it
3-test if the function takes number it will throw type error says parameter should be string
 */
// //////////////////////////////////////////////////////////////////////////////////////////////
