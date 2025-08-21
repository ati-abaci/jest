const sum = require("./2-sum2");

test("adds two positive numbers (1 + 2 = 3)", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds a negative and positive number (-1 + 3 = 2)", () => {
  expect(sum(-1, 3)).toBe(2);
});

test("throws an error when inputs are not numbers", () => {
  expect(() => sum("a", 2)).toThrow(TypeError);
  expect(() => sum("a", 2)).toThrow("Input must be numbers");
});
