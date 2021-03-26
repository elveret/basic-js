const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      let counter = 1;
      arr.forEach((element) => {
        let internalCounter = this.calculateDepth(element);
        counter = counter <= internalCounter ? internalCounter + 1 : counter;
      });
      return counter;
    }
  }
};
