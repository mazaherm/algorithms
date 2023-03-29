export const addAllNumbers = (...numbers: Array<number>): number => {
  // using the built in redeuce function
  // const sum = numbers.reduce((a: number, b: number) => a + b);

  let sum: number = 0;
  numbers.forEach((number) => (sum += number));

  return sum;
};
