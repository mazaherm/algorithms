export const gatherLargestNumbersInArray = (myArray: Array<Array<number>>) => {
  const newArr: Array<number> = myArray.map((num) =>
    num.reduce((a: number, b: number) => (a > b ? a : b))
  );

  return newArr;
};
