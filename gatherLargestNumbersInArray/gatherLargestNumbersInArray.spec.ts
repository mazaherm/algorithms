import { gatherLargestNumbersInArray } from "./gatherLargestNumbersInArray";

describe("gatherLargestNumbersInArray", () => {
  it.each([
    [
      [5, 27, 39, 1001],
      [
        [4, 5, 1, 3],
        [13, 27, 18, 26],
        [32, 35, 37, 39],
        [1000, 1001, 857, 1],
      ],
    ],
    [
      [50, 99],
      [
        [4, 50, 3],
        [99, 10, 20, 32],
      ],
    ],
    [[1], [[1, 0, 1, 0]]],
  ])("should return %p", (output, array) => {
    // Act
    const result = gatherLargestNumbersInArray(array);

    // Assert
    expect(result).toEqual(output);
  });
});
