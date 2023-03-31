import { sumAllNumsInRange } from "./sumAllNumsInRange";

describe("sumAllNumsInRange", () => {
  it.each([
    [45, [4, 1, 7, 9]],
    [5005, [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]],
    [36, [1, 2, 3, 8, 4, 3, 5]],
  ])(`should return %p given the input %p`, (output, arr) => {
    // Act
    const result = sumAllNumsInRange(arr);

    // Assert
    expect(result).toEqual(output);
  });
});
