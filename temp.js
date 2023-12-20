function getSeason(date) {
  if (!arguments[0]) return "Unable to determine the time of year!";
  if (Object.getOwnPropertyNames(date).length !== 0) return "Invalid date!"
  if (date instanceof Date) {
    console.log(date.toDateString())
    return true;
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
date = new Date(1994, 1, 2, 3, 4, 5)
// console.log(fakeDate)
// console.log(typeof date === 'string')
// console.log(date)
// console.log(date.getMonth())
console.log(getSeason(fakeDate));

console.log(date.toDateString())
// console.log(fakeDate.toDateString())
console.log(Object.getOwnPropertySymbols(date))
console.log(Object.getOwnPropertySymbols(fakeDate))
console.log(Object.getOwnPropertyNames(date).length)
console.log(Object.getOwnPropertyNames(fakeDate).includes('string'))

// fakeDate.