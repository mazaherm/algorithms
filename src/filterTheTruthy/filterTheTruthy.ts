export const filterTheTruthy = (arr: Array<any>): Array<any> => {
  // const newArray = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if(arr[i]) newArray.push(arr[i]);
  // }

  // return newArray;
  return arr.filter((value) => !!value);
};
