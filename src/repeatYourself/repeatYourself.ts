// using the built in repeat function
// export const repeatYourself = (input, numOfTimes) => input.repeat(numOfTimes);

export const repeatYourself = (input: string, numOfTimes: number) => {
  let result: string = "";
  while (numOfTimes > 0) {
    result += input;
    numOfTimes--;
  }

  return result;
};
