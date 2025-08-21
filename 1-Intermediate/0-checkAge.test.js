const checkAge = require("./0-checkAge");

test('returns "You are eligible" when age is greater than 18', () => {
  expect(checkAge(20)).toBe("You are eligible");
  expect(checkAge(19)).not.toBeUndefined();
});

test("returns undefined when age is less than or equal to 18", () => {
  expect(checkAge(16)).toBeUndefined();
  expect(checkAge(18)).toBeUndefined();
});
