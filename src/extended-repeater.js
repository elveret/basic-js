const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {
    repeatTimes = 0,
    separator = "+",
    addition = "",
    additionRepeatTimes = 0,
    additionSeparator = "|",
  } = options;
  str = String(str);
  addition = String(addition);

  if (addition != "") {
    let additionStep = addition;
    for (j = 2; j <= additionRepeatTimes; j++) {
      addition = addition + additionSeparator + additionStep;
      console.log(addition);
    }
  }

  let strStep = str + addition;
  console.log(repeatTimes);
  for (i = 0; i <= repeatTimes; i++) {
    str = i == 0 || i == 1 ? strStep : str + separator + strStep;
  }

  return str;
};
