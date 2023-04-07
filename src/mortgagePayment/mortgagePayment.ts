export const mortgagePayment = (
  principal: number,
  rateOfInterest: number,
  years: number
): string => {
  const totalNumberOfPayments = years * 12;
  const annualRateOfInterest = rateOfInterest / 100 / 12;

  const numerator =
    annualRateOfInterest *
    Math.pow(1 + annualRateOfInterest, totalNumberOfPayments);
  const denominator =
    Math.pow(1 + annualRateOfInterest, totalNumberOfPayments) - 1;

  const monthlyPayment: number = principal * (numerator / denominator);

  return `£${monthlyPayment.toFixed(0)} per month`;
};
