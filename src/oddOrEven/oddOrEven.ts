export const oddOrEven = (arr: Array<number>): string =>
  arr.reduce((a, b) => a + b, 0) % 2 === 0 ? "even" : "odd";
