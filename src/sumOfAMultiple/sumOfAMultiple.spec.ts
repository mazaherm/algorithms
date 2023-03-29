import { sumOfAMultiple } from "./sumOfAMultiple";

describe("sumOfAMultiple", () => {
  it.each([
    [18, 3, 10],
    [99500, 5, 1000],
    [60, 6, 30],
  ])(
    `returns %p when the multple is %p and the limit is %p`,
    (output, multiple, limit) => {
      // Act
      const result = sumOfAMultiple(multiple, limit);

      // Assert
      expect(output).toEqual(result);
    }
  );
});
