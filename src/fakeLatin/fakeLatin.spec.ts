import { fakeLatin } from "./fakeLatin";

describe("fakeLatin", () => {
  it.each([
    ["Akefay Atinlay siay wesomeaay", "Fake Latin is awesome"],
    ["hetay orldway siay reedygay", "the world is greedy"],
  ])("should return %p when the input string is %p", (output, str) => {
    // Act
    const result = fakeLatin(str);

    // Assert
    expect(result).toStrictEqual(output);
  });
});
