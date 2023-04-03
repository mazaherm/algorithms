export const whoLikesIt = (arr: Array<string>): string => {
  const messageEnd = `like${arr.length < 2 ? "s" : ""} this`;
  let message: string = `no one ${messageEnd}`;

  if (!arr.length) message;
  if (arr.length === 1) message = `${arr[0]} ${messageEnd}`;
  if (arr.length === 2) message = `${arr[0]} and ${arr[1]} ${messageEnd}`;
  if (arr.length === 3)
    message = `${arr[0]}, ${arr[1]} and ${arr[2]} ${messageEnd}`;
  if (arr.length > 3)
    message = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others ${messageEnd}`;

  return message;
};
