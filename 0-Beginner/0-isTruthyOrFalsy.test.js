const isTruthyOrFalsy = require("./0-isTruthyOrFalsy");

test('returns truthy for true, "hello", and 10', () => {
  expect(isTruthyOrFalsy(true)).toBeTruthy();
  expect(isTruthyOrFalsy("hello")).toBeTruthy();
  expect(isTruthyOrFalsy(10)).toBeTruthy();
});

test("returns falsy for false, empty string, 0, null, and undefined", () => {
  expect(isTruthyOrFalsy(false)).toBeFalsy();
  expect(isTruthyOrFalsy("")).toBeFalsy();
  expect(isTruthyOrFalsy(0)).toBeFalsy();
  expect(isTruthyOrFalsy(null)).toBeFalsy();
  expect(isTruthyOrFalsy(undefined)).toBeFalsy();
});
