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
  encrypt(...args) {
    if (this.checkArguments(args)) {
      console.log("its ok");
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

module.exports = {
  VigenereCipheringMachine,
};
