export const convertToKebabCase = (str: string): string => {
  let kebabCaseString = "";
  const arrayOfLetters: Array<string> = str.split("");
  for (let i = 0; i < arrayOfLetters.length; i++) {
    kebabCaseString +=
      arrayOfLetters[i] === arrayOfLetters[i].toUpperCase()
        ? arrayOfLetters[i].replace(
            arrayOfLetters[i],
            `-${arrayOfLetters[i].toLowerCase()}`
          )
        : arrayOfLetters[i];
  }
  return kebabCaseString;
};
