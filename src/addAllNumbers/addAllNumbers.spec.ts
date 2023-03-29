import { addAllNumbers } from "./addAllNumbers";

describe("addAllNumbers", () => {
  it("returns 10", () => {
    // Act
    const result = addAllNumbers(5, 5);

    // Assert
    expect(result).toEqual(10);
  });
  it("returns 55", () => {
    // Act
    const result = addAllNumbers(2, 10, 8, 15, 7, 1, 12);

    // Assert
    expect(result).toEqual(55);
  });
  it("returns 13", () => {
    // Act
    const result = addAllNumbers(7, -3, 9);

    // Assert
    expect(result).toEqual(13);
  });
});
