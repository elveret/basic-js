const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
    this.tabulaRecta = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(message, key) {
    return this.crypt(message, key, true);
  }
  decrypt(message, key) {
    return this.crypt(message, key, false);
  }
  crypt(message, key, cryptMode = true) {
    if (!message || !key) {
      throw new Error("Empty value");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();

    let newWord = "";
    let shiftForKey = 0;
    const a = this.tabulaRecta;

    for (let i = 0; i < message.length; i++) {
      let newChar = "";
      if (a.includes(message[i])) {
        let posMessage = a.indexOf(
          message[i >= message.length ? i % message.length : i]
        );
        let posKey = a.indexOf(
          key[
            i - shiftForKey >= key.length
              ? (i - shiftForKey) % key.length
              : i - shiftForKey
          ]
        );

        if (cryptMode === false) {
          posKey = -posKey;
        }
        newChar = a[(a.length + (posKey + posMessage)) % a.length];
      } else {
        newChar = [message[i]];
        shiftForKey++;
      }

      newWord = newWord + newChar;
    }
    if (!this.direction) {
      newWord = newWord.split("").reverse().join("");
    }
    return newWord;
  }
}

module.exports = VigenereCipheringMachine;
