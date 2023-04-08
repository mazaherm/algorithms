import { reverseSomeWords } from "./reverseSomeWords";

describe("reverseSomeWords", () => {
  it.each([
    [
      "gnidoC like yrteop dluohs be trohs and esicnoc",
      "Coding like poetry should be short and concise",
      5,
    ],
    [
      "First, solve the problem. Then, write the code",
      "First, solve the problem. Then, write the code",
      10,
    ],
    ["noisufnoC si trap fo gnimmargorp", "Confusion is part of programming", 0],
  ])(`should return %p when the input is %p`, (output, str, length) => {
    // Act
    const result = reverseSomeWords(str, length);

    // Assert
    expect(result).toEqual(output);
  });
});
