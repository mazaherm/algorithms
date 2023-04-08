export const gatherLargestNumbersInArray = (myArray: Array<Array<number>>) =>
  myArray.map((num) => num.reduce((a: number, b: number) => (a > b ? a : b)));
