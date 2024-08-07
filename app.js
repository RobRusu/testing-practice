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

function caesarCipher(string, shift) {
  let cipher = "";

  for (let i = 0; i < string.length; i++) {
    let letter;
    if (string.charAt(i).match(/[a-zA-Z]/i)) {
      letter = string.charCodeAt(i);
      if (
        string.charAt(i) === string.charAt(i).toUpperCase() &&
        letter + shift > 90
      ) {
        let difference = letter + shift - 122;
        letter = 65 + (difference - 1);
        cipher = cipher + String.fromCharCode(letter);
      } else if (
        string.charAt(i) === string.charAt(i).toLowerCase() &&
        letter + shift > 122
      ) {
        let difference = letter + shift - 122;
        letter = 97 + (difference - 1);
        cipher = cipher + String.fromCharCode(letter);
      } else {
        cipher = cipher + String.fromCharCode(letter + shift);
      }
    } else {
      letter = string.charAt(i);
      cipher = cipher + letter;
    }
  }

  return cipher;
}

exports.capitalize = capitalize;
exports.reverseString = reverseString;
exports.calculator = calculator;
exports.caesarCipher = caesarCipher;
