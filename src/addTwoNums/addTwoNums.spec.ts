import { addTwoNumbers } from "./addTwoNums";

describe("addTwoNumbers", () => {
  it("should return 5 when num1 is 2 and num2 is 3", () => {
    // Arrange
    const num1 = 2;
    const num2 = 3;

    // Act
    const result = addTwoNumbers(num1, num2);

    // Assert
    expect(result).toEqual(5);
  });

  it("should return 0 when num1 is 0 and num2 is 0", () => {
    // Arrange
    const num1 = 0;
    const num2 = 0;

    // Act
    const result = addTwoNumbers(num1, num2);

    // Assert
    expect(result).toEqual(0);
  });
  it("should return -4 when num1 is -1 and num2 is -3", () => {
    // Arrange
    const num1 = -1;
    const num2 = -3;

    // Act
    const result = addTwoNumbers(num1, num2);

    // Assert
    expect(result).toEqual(-4);
  });
  it("should return 1.5 when num1 is 1 and num2 is 0.5", () => {
    // Arrange
    const num1 = 1;
    const num2 = 0.5;

    // Act
    const result = addTwoNumbers(num1, num2);

    // Assert
    expect(result).toEqual(1.5);
  });
  // it.each([
  //   [5, 3, 2],
  //   [0, 0, 0],
  //   [-4, -1, -3],
  //   [1.5, 0.5, 1],
  // ])(
  //   `returns %p given that num1 is %p and num2 is %p`,
  //   (output, num1, num2) => {
  //     // Act
  //     const result = addTwoNumbers(num1, num2);

  //     // Assert
  //     expect(result).toEqual(output);
  //   }
  // );
});
