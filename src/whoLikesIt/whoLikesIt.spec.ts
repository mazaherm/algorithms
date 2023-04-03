import { whoLikesIt } from "./whoLikesIt";

describe("whoLikesIt", () => {
  it.each([
    ["Peter likes this", ["Peter"]],
    ["Jacob and Alex like this", ["Jacob", "Alex"]],
    ["Max, John and Mark like this", ["Max", "John", "Mark"]],
    ["Alex, Jacob and 2 others like this", ["Alex", "Jacob", "Mark", "Max"]],
  ])("returns %p when the input is %p", (output, arr) => {
    // Act
    const result = whoLikesIt(arr);

    // Assert
    expect(output).toEqual(result);
  });
});
