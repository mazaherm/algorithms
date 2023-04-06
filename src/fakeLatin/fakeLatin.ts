export const fakeLatin = (str: string): string => {
  return str
    .split(" ")
    .map((word) => {
      const beginning =
        word[0] === word[0].toUpperCase()
          ? word.substring(1)[0].toUpperCase() + word.substring(2)
          : word.substring(1);
      const ending = word[0].toLowerCase() + "ay";

      return beginning.concat(ending);
    })
    .join(" ");
};
