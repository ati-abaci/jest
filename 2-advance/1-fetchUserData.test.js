const fetchUserData = require("./1-fetchUserData");

describe("fetchUserData", () => {
  beforeEach(() => {
    // *this line for new mock before each test
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("returns parsed user data for the given id", async () => {
    const mockData = { id: 3, name: "User 3" };

    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    const result = await fetchUserData(3);

    expect(global.fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users/3"
    );
    expect(result).toEqual(mockData);
  });

  test("propagates network errors from fetch", async () => {
    global.fetch.mockRejectedValue(new Error("network down"));

    await expect(fetchUserData(5)).rejects.toThrow("network down");
  });
});
