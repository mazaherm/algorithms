import { repeatYourself } from "./repeatYourself";

describe("repeatYourself", () => {
  it.each([
    ["Hi", "HiHiHi", 3],
    ["hello", "hellohello", 2],
    ["lol", "lollollollollol", 5],
    ["6", "666", 3],
    ["!", "!!!!!!!!!!", 10],
  ])(
    `given the input %p, it returns %p when number of times given is %p`,
    (input, output, times) => {
      // Act
      const result = repeatYourself(input, times);

      // Assert
      expect(result).toEqual(output);
    }
  );
});
