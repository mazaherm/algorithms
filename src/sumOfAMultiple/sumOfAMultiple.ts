export const sumOfAMultiple = (multiple: number, limit: number) => {
  let sum: number = 0;
  for (let i = 0; i < limit; i++) {
    if (i % multiple === 0) sum += i;
  }

  return sum;
};
