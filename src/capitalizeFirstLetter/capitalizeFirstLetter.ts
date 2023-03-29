export const capitalizeFirstLetter = (inputString: string) => {
  const arrayOfCapitalizedWords = inputString
    .split(" ")
    .map((word) => word[0].toLocaleUpperCase() + word.slice(1));

  const capitalizedString = arrayOfCapitalizedWords.join(" ");

  return capitalizedString;
};
