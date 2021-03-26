const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    // value !== undefined ? this.arr.push(`(${value})`) : this.arr.push(`()`);
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || this.arr[position] === undefined) {
      this.arr = [];
      throw new Error("Incorrect position value");
    } else {
      this.arr.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let finishedChain = this.arr.join("~~");
    this.arr = [];
    return finishedChain;
  },
};

module.exports = chainMaker;
