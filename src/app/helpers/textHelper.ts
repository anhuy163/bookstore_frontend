export const getFirstLetterOfName = (text: string) => {
  return text.charAt(0);
};

export const getCategoryName = (text: string) => {
  const splitedArr = text.split(" ");

  var changedName = "";

  for (let i = 1; i < splitedArr.length; i++) {
    changedName += splitedArr[i] + " ";
  }

  return changedName;
};
