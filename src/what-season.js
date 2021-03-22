const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (
    typeof date !== "object" ||
    typeof date === "undefined" ||
    date === null
  ) {
    return "Unable to determine the time of year!";
  }
  try {
    let controlValue = date.valueOf();
  } catch (err) {
    throw new Error("ERROR");
  }
  const seasonsMonths = [
    [0, 1, 11],
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 10],
  ];
  let season = "";
  let Month = date.getMonth();

  if (seasonsMonths[0].includes(Month)) {
    season = "winter";
  } else if (seasonsMonths[1].includes(Month)) {
    season = "spring";
  } else if (seasonsMonths[2].includes(Month)) {
    season = "summer";
  } else if (seasonsMonths[3].includes(Month)) {
    season = "autumn (fall)";
  }
  return season;
};
