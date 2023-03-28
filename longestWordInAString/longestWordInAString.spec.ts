import { longestWordInAString } from "./longestWordInAString";

describe("longestWordInAString", () => {
  it.each([
    ["So many books, so little time", "little"],
    ["Code never lies. Comments sometimes do", "sometimes"],
    ["I solemnly swear that I am upto no good", "solemnly"],
  ])(`the longest word in %p is %p`, (string, output) => {
    // Act
    const result = longestWordInAString(string);

    // Assert
    expect(result).toEqual(output);
  });
});
