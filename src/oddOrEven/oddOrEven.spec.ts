import { oddOrEven } from "./oddOrEven";

describe("oddOrEven", () => {
  it.each([
    ["even", [0]],
    ["odd", [1]],
    ["even", []],
    ["even", [0, 1, 5]],
    ["even", [0, -1, -5]],
    ["odd", [0, 1, 2]],
    ["odd", [-1023, -1, 3]],
  ])(`returns %p when input is %p`, (output, arr) => {
    // Act
    const result = oddOrEven(arr);

    // Assert
    expect(result).toEqual(output);
  });
});
