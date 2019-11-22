const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;


let value = Number(readlineSync.question("\nPositive integer: "));
while (Number.isNaN(value) ||
         !Number.isInteger(value) ||
         value < 1 ||
         !Number.isSafeInteger(value)) {
         value = Number(readlineSync.question("Positive integer: "));
       }
let total = 0;
let remainder = 0;

  while (value > 0){
    let remainder = value % 10;
    value = Math.floor(value / 10);

    if (remainder % 2 !== 0) {
      total = total + remainder;
    }
  }
console.log("\n" + total + ".\n");
