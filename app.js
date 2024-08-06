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

exports.capitalize = capitalize;
exports.reverseString = reverseString;
