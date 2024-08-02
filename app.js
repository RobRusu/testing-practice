function capitalize(string) {
  let word = string.toLowerCase();

  return word.charAt(0).toUpperCase() + word.slice(1);
}

exports.capitalize = capitalize;
