const app = require("./app");
const capitalize = app.capitalize;

test("capitalizes the first letter", () => {
  expect(capitalize("a")).toBe("A");
});

test("capitalizes the first letter", () => {
  expect(capitalize("hello")).toBe("Hello");
});
