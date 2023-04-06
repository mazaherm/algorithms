import { convertToKebabCase } from "./convertToKebabCase";

describe("convertToKebabCase", () => {
  it.each([
    ["kebab-case", "kebabCase"],
    ["this-is-a-long-string", "thisIsALongString"],
  ])(`should return %p when given the input %p`, (output, str) => {
    // Act
    const result = convertToKebabCase(str);

    // Assert
    expect(result).toEqual(output);
  });
});
