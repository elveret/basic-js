const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let teamName = [];
  members.forEach(function (item) {
    if (typeof item === "string") {
      item = item.trim();
      teamName.push(item[0].toUpperCase());
    }
    return item;
  });

  let result = teamName.sort().join("");
  return result ? result : false;
};
