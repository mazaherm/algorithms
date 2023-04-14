type AcceptedTypes = string | number;
export const twoArraysToObject = (
  arr1: Array<AcceptedTypes>,
  arr2: Array<AcceptedTypes>
): any => {
  return arr1.reduce((obj, item, index) => {
    obj[item] = arr2[index];
    return obj;
  }, {});
};
