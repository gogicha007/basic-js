const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(value = true) {
    this.option = value;
    this.alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(...args) {
    if (this.checkArguments(args)) {
      return this.cypher(args, "encrypt").join("");
    } else {
      throw Error("Incorrect arguments!");
    }
  }
  decrypt(...args) {
    if (this.checkArguments(args)) {
      return this.cypher(args, "decrypt").join("");
    } else {
      throw Error("Incorrect arguments!");
    }
  }

  cypher(args, direction) {
    console.log(`${args[0]} - ${direction}`);
    const key = args[1]
      .repeat(Math.ceil(args[0].replaceAll(" ", "").length / args[1].length))
      .toUpperCase()
      .slice(0, args[0].replaceAll(" ", "").length);
    const keyArr = this.option ? [...key] : [...key].reverse();
    const messageArr = this.option
      ? [...args[0].toUpperCase()]
      : [...args[0].toUpperCase()].reverse();
    messageArr.forEach((val, idx) => {
      if (val === " ") keyArr.splice(idx, 0, " ");
    });
    let keyIdx, valIdx, cyphIdx, cyphVal;
    const result = messageArr.reduce((acc, val, idx) => {
      if (this.alpha.indexOf(val) >= 0) {
        valIdx = this.alpha.indexOf(val);
        keyIdx = this.alpha.indexOf(keyArr[idx]);
        cyphIdx =
          direction === "encrypt"
            ? (valIdx + keyIdx) % 26
            : (26 + (valIdx - keyIdx)) % 26;
        cyphVal = this.alpha[cyphIdx];
        acc.push(cyphVal);
      } else {
        acc.push(val);
      }
      return acc;
    }, []);
    return result;
  }
  checkArguments(args) {
    return args.length === 2 && args.every((val) => typeof val === "string");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
