export const getFilledArray = (length, to, from) => {
  const fillArray = new Array(length).fill(1).map((el, index) => index);
  if (!to || !from) {
    return fillArray;
  }
  return fillArray.slice(to, from);
};
