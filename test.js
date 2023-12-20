function getSeason(date) {
  if (!arguments[0]) return "Unable to determine the time of year!";
  if (date instanceof Date) {


    const seasons = {
      winter : ["Dec","Jan","Feb"],
      spring : ["Mar","Apr","May"],
      summer : ["Jun","Jul","Aug"],
      autumn : ["Sep","Oct","Nov"],
    };
    const month = [...date.toDateString().split(' ')]
    console.log(month)
    const result = Object.entries(seasons).filter((val) => val[1].includes(month[1]))
    return result[0][0];
  } else {
    throw Error("Invalid date!");
  }
}

const fakeDate = {
  toString() {
      return Date.prototype.toString.call(new Date());
  },
  [Symbol.toStringTag]: 'Date'
};

Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));
date = new Date(1900, 0, 22, 23, 45, 11, 500),
    
// console.log(date)
// console.log(date.getMonth())
console.log(getSeason(fakeDate));
