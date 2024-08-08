const app = require("./app");
const capitalize = app.capitalize;
const reverseString = app.reverseString;
const calculator = app.calculator;
const caesarCipher = app.caesarCipher;
const analyzeArray = app.analyzeArray;

test("capitalizes the first letter", () => {
  expect(capitalize("a")).toBe("A");
});

test("capitalizes the first letter", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("return string in reverse", () => {
  expect(reverseString("Mana")).toBe("anaM");
});

test("adding two numbers", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("subtracting two numbers", () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test("divide two numbers", () => {
  expect(calculator.divide(25, 5)).toBe(5);
});

test("multiply two numbers", () => {
  expect(calculator.multiply(3, 3)).toBe(9);
});

test("caesar cipher", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("caesar cipher", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("caesar cipher", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyze the array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("analyze the array", () => {
  expect(analyzeArray([7, 90, 23, 55, 300, 3, 19])).toEqual({
    average: 71,
    min: 3,
    max: 300,
    length: 7,
  });
});
