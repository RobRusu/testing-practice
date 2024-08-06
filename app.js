function capitalize(string) {
  let word = string.toLowerCase();

  return word.charAt(0).toUpperCase() + word.slice(1);
}

function reverseString(string) {
  let reverseWord = "";

  for (let i = string.length; i >= 0; i--) {
    reverseWord = reverseWord + string.charAt(i);
  }
  return reverseWord;
}

const calculator = {};

calculator.add = function add(num1, num2) {
  return num1 + num2;
};

calculator.subtract = function subtract(num1, num2) {
  return num1 - num2;
};

calculator.divide = function divide(num1, num2) {
  return num1 / num2;
};

calculator.multiply = function multiply(num1, num2) {
  return num1 * num2;
};

exports.capitalize = capitalize;
exports.reverseString = reverseString;
exports.calculator = calculator;
