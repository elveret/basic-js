const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let varTurns = 2 ** disksNumber - 1;
  let varseconds = Math.floor((varTurns / turnsSpeed) * 3600);
  let answer = {
    turns: varTurns,
    seconds: varseconds,
  };
  return answer;
};
