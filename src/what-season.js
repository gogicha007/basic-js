const { NotImplementedError } = require('../extensions/index.js');

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
  if (date instanceof Date) {
    const seasons = new Map([
      [[12, 1, 2], "winter"],
      [[3, 4, 5], "spring"],
      [[6, 7, 8], "summer"],
      [[9, 10, 11], "autumn"],
    ]);

    const result = (seasons, month) => {
      for (const season of seasons.entries()) {
        if (season[0].includes(month)) return season[1];
      }
    };


    return result(seasons, date.getMonth());
  } else {
    throw Error("Invalid date!");
  }
}

module.exports = {
  getSeason
};
