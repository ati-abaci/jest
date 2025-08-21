const { delayPromise, getUserWithDelay } = require("./0-delayPromise");

describe("delayPromise", () => {
  test("resolves after at least the given milliseconds", async () => {
    const start = Date.now();
    await delayPromise(1000);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(1000);
  });
});

describe("getUserWithDelay", () => {
  test("returns a user object after delay", async () => {
    const start = Date.now();
    const user = await getUserWithDelay(8);
    const end = Date.now();

    expect(user).toEqual({ id: 8, name: "User 8" });
    expect(end - start).toBeGreaterThanOrEqual(1000);
  });
});
