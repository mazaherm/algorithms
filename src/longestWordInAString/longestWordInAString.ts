export const longestWordInAString = (myString: string) =>
  myString.split(" ").reduce((a, b) => (a.length > b.length ? a : b));
