export const reverseSomeWords = (str: string, length: number): string =>
  str
    .split(" ")
    .map((word) =>
      word.length >= length ? word.split("").reverse().join("") : word
    )
    .join(" ");
