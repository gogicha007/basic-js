function repeater(str, options) {
  console.log(str);
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || "+";
  const addition = options.addition || "";
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || "";
  const newStr = `${str}`
  console.log(options);
}

console.log(
  repeater("STRING", {
    repeatTimes: 3,
    separator: "**",
    addition: "PLUS",
    additionRepeatTimes: 3,
    additionSeparator: "00",
  })
);
