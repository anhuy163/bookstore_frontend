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

export const createRandomImageKey = (length) => {
  var result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return `i_${result}`;
};

export const convertNumberArray = (array) => {
  const length = array.length;
  var result = "";
  for (let i = 0; i < length - 1; i++) {
    result = array[i] + ",";
  }
  result += array[length - 1];
  return result;
};
