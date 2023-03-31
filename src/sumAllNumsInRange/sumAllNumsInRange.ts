export const sumAllNumsInRange = (arr: Array<number>): number => {
  let sum = 0;
  const sortedArr = arr.sort((a, b) => a - b);
  for (let i = sortedArr[0]; i <= sortedArr[sortedArr.length - 1]; i++) {
    sum += i;
  }
  return sum;
};
