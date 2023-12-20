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

    // console.log(result(seasons, date.getMonth()));

    return result(seasons, date.getMonth());
  } else {
    throw Error("Invalid date!");
  }
}

date = new Date(2019, 11, 22, 23, 45, 11, 500)
console.log(date)
console.log(date.getMonth())
console.log(getSeason(date));
