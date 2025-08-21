const filterElement = require("./2-filterElement");

test('returns empty array when filtering "grape" in an empty array', () => {
  expect(filterElement([], "grape")).toEqual([]);
});

test('returns ["apple"] when filtering "apple" in an array with "apple"', () => {
  expect(filterElement(["apple"], "apple")).toEqual(["apple"]);
});
