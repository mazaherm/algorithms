import { countVowels } from "./countVowels";

describe("countVowels", () => {
  it.each([
    [
      26,
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    ],
    [0, "Myths"],
  ])(`returns %p with the string %p`, (output, str) => {
    // Act
    const result = countVowels(str);

    // Assert
    expect(result).toEqual(output);
  });
});
