export const longestWordInAString = (myString: string) => {
  const arrayOfStrings = myString.split(" ");
  const longestWord = arrayOfStrings.reduce((a: string, b: string) =>
    a.length > b.length ? a : b
  );
  return longestWord;
};
