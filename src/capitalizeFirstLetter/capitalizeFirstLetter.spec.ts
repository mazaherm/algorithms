import { capitalizeFirstLetter } from "./capitalizeFirstLetter";

describe("capitalizeFirstLetter", () => {
  it.each([
    [
      "Harry Potter And The Goblet Of Fire",
      "harry potter and the Goblet of fire",
    ],
  ])(`returns %p given that the input string is %p`, (output, inputString) => {
    // Act
    const result = capitalizeFirstLetter(inputString);

    // Assert
    expect(result).toEqual(output);
  });
});
