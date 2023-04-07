import { mortgagePayment } from "./mortgagePayment";

describe("mortgagePayment", () => {
  it.each([
    ["£635 per month", 178205.16, 1.54, 29],
    ["£1715 per month", 350000, 3.3, 25],
  ])(
    `should return %p when the principle is %p, rate of interest is %p and years to pay is %p`,
    (output, principle, rateOfInterest, years) => {
      // Act
      const result = mortgagePayment(principle, rateOfInterest, years);

      // Assert
      expect(result).toEqual(output);
    }
  );
});
