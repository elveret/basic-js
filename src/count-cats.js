const CustomError = require("../extensions/custom-error");

module.exports = function countCats(varArray) {
  let result = varArray.reduce(function (sum, itemArray) {
    if (Array.isArray(itemArray)) {
      sum = sum.concat(itemArray.filter((item) => item === "^^"));
    } else {
      if (itemArray === "^^") {
        sum = sum.concat(itemArray);
      }
    }
    return sum;
  }, []);
  return result.length;
};
