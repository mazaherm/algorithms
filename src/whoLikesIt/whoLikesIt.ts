export const whoLikesIt = (arr: Array<string>): string => {
  let message: string = "no one likes this";
  if (!arr.length) message;
  if (arr.length === 1) message = `${arr[0]} likes this`;
  if (arr.length === 2) message = `${arr[0]} and ${arr[1]} like this`;
  if (arr.length === 3)
    message = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
  if (arr.length > 3)
    message = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
  return message;
};
