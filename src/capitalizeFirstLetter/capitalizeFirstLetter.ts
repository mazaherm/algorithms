export const capitalizeFirstLetter = (inputString: string) => {
  const arrayOfCapitalizedWords: Array<string> = inputString
    .split(" ")
    .map((word) => word[0].toLocaleUpperCase() + word.slice(1));

  const capitalizedString = arrayOfCapitalizedWords.join(" ");

  return capitalizedString;
};
