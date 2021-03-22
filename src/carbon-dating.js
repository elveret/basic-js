const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let pastleActivity = parseFloat(String(sampleActivity));

  if (
    typeof sampleActivity !== "string" ||
    Number.isNaN(pastleActivity) ||
    pastleActivity <= 0 ||
    pastleActivity > MODERN_ACTIVITY
  )
    return false;
  let result = Math.ceil(
    Math.log(MODERN_ACTIVITY / pastleActivity) /
      (Math.log(2) / HALF_LIFE_PERIOD)
  );

  return result;
};
