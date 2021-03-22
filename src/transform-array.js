const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Not an array");
  }

  let newArr = [];

  for (index = 0; index <= arr.length - 1; index++) {
    switch (arr[index]) {
      //исключает следующий за ней элемент исходного массива из преобразованного массива
      case "--discard-next":
        if (arr[index + 1] !== undefined) {
          index += 1;
        }
        break;

      //исключает предшествующий ей элемент исходного массива из преобразованного массива
      case "--discard-prev":
        if (
          arr[index - 1] !== undefined &&
          arr[index - 2] !== "--discard-next"
        ) {
          newArr.pop();
        }
        break;

      //удваивает следующий за ней элемент исходного массива в преобразованном массиве
      case "--double-next":
        if (arr[index + 1] !== undefined) {
          newArr.push(arr[index + 1]);
        }
        break;

      //удваивает предшествующий ей элемент исходного массива в преобразованном массиве
      case "--double-prev":
        if (
          arr[index - 1] !== undefined &&
          arr[index - 2] !== "--discard-next"
        ) {
          newArr.push(arr[index - 1]);
        }
        break;

      default:
        newArr.push(arr[index]);
        break;
    }
  }

  return newArr;
};
