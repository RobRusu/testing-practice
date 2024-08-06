const app = require("./app");
const capitalize = app.capitalize;
const reverseString = app.reverseString;

test("capitalizes the first letter", () => {
  expect(capitalize("a")).toBe("A");
});

test("capitalizes the first letter", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("return string in reverse", () => {
  expect(reverseString("Mana")).toBe("anaM");
});
