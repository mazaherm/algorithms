import { twoArraysToObject } from "./twoArraysToObject";

describe("twoArraysToObject", () => {
  it.each([
    [
      {
        "01-04-2020": "30p/mile",
        "01-04-2021": "40p/mile",
        "01-04-2022": "35p/mile",
      },
      ["01-04-2020", "01-04-2021", "01-04-2022"],
      ["30p/mile", "40p/mile", "35p/mile"],
    ],
    [
      {
        1: "one",
        2: "two",
        3: "three",
      },
      [1, 2, 3],
      ["one", "two", "three"],
    ],
    [
      {
        ONE: 1,
        TWO: 2,
        THREE: 3,
      },
      ["ONE", "TWO", "THREE"],
      [1, 2, 3],
    ],
  ])(`should return %p`, (output, arr1, arr2) => {
    // Act
    const result = twoArraysToObject(arr1, arr2);

    // Arrange
    expect(result).toEqual(output);
  });
});
