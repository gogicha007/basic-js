class VigenereCipheringMachine {
  constructor(value = true) {
    this.option = value;
    this.alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(...args) {
    if (this.checkArguments(args)) {
      const key = args[1]
        .repeat(Math.ceil(args[0].length / args[1].length))
        .toUpperCase();
      const result = Array.from(args[0].toUpperCase()).reduce((acc, val, idx) => {
        console.log(val);
        console.log(this.alpha.indexOf(val));
      }, []);
    } else {
      throw Error("Incorrect arguments!");
    }
  }
  decrypt(...args) {
    if (this.checkArguments(args)) {
      console.log("its ok");
    } else {
      throw Error("Incorrect arguments!");
    }
  }

  checkArguments(args) {
    return args.length === 2 && args.every((val) => typeof val === "string");
  }
}

const machine = new VigenereCipheringMachine();

console.log(machine.encrypt("undefined", "lala"));
