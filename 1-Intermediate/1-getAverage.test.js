const getAverage = require("./1-getAverage");

test("average greater than 5", () => {
  const avg = getAverage(6, 7, 6);
  expect(avg).toBeGreaterThan(5);
});

test("average less than 5", () => {
  const avg = getAverage(2, 3, 4);
  expect(avg).toBeLessThan(5);
});

test("average equal to 5", () => {
  const avg = getAverage(4, 5, 6);
  expect(avg).toBe(5);
});
