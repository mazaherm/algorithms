export const capitalizeFirstLetter = (inputString: string) =>
  inputString
    .split(" ")
    .map((word) => word[0].toLocaleUpperCase() + word.slice(1))
    .join(" ");
