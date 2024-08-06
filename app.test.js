const app = require("./app");
const capitalize = app.capitalize;
const reverseString = app.reverseString;
const calculator = app.calculator;

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
