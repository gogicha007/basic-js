const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!arguments[0]) return "Unable to determine the time of year!";
  if ((date instanceof Date) && Object.getOwnPropertyNames(date).length === 0) {
    const seasons = {
      winter: ["Dec", "Jan", "Feb"],
      spring: ["Mar", "Apr", "May"],
      summer: ["Jun", "Jul", "Aug"],
      autumn: ["Sep", "Oct", "Nov"],
    };
    const month = [...date.toDateString().split(" ")];
    // console.log(month);
    const result = Object.entries(seasons).filter((val) =>
      val[1].includes(month[1])
    );
    return result[0][0];
  } else {
    throw Error("Invalid date!");
  }
}

module.exports = {
  getSeason,
};
