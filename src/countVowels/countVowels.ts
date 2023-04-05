const vowels = ["a", "e", "i", "o", "u"];
export const countVowels = (str: string): number =>
  [...str].filter((char) => vowels.includes(char)).length;
