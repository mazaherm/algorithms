import { filterTheTruthy } from "./filterTheTruthy";

describe("filterTheTruthy", () => {
  it.each([
    [
      [3, "is greater than", 1],
      [3, null, "is greater than", false, 1],
    ],
    [[], [undefined, null, "", false]],
    [
      [true, 1, "hello"],
      [true, 1, "hello"],
    ],
  ])(`should return %p when the array is %p`, (output, array) => {
    // Act
    const result = filterTheTruthy(array);

    // Assert
    expect(result).toEqual(output);
  });
});
