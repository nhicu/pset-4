const readlineSync = require("readline-sync");

const MIN = 1000000000000;
const MAX = 9999999999999999;
let x = 1;
let crednum = 0;
let add= 0;
let crednum2;
let sum = 0;
let first = 0;
let second = 0;
let one = 0;
let digit = 0;

console.log("\n");
do {
  crednum = Number(readlineSync.question("Number: "));
} while (crednum < MIN || crednum > MAX || Number.isNaN(crednum) || !Number.isInteger(crednum) || !Number.isSafeInteger(crednum))

crednum2 = crednum;

while (crednum2 >= 1) {
  crednum2 = crednum2 / 10;
  digit = digit + 1;
}
first = Math.floor(crednum / 10 ** (digit - 1));
second = (Math.floor(crednum / 10 ** (digit - 2)) / 10) * 10;

for (let loop = 0; loop < digit; loop++) {
  one = (crednum - Math.floor(crednum / 10) * 10);
  crednum = Math.floor(crednum / 10);
  if (loop % 2 == 1) {
    if (one * 2 >= 10) {
      add = add + ((one * 2 - one * 2 % 10) / 10 + one * 2 % 10);
    } else if (one * 2 < 10) {
      add = add + one * 2;
    }
  } else {
    add = add + one;
  }
  ++x;
}

if (add / 10 % 1 != 0) {
  console.log("\nInvalid.\n")
} else if (digit == 15 && (second == 34 || second == 37)) {
  console.log("\nAmex.\n")
} else if (digit == 16 && (second <= 55 && second >= 51)) {
  console.log("\nMastercard.\n")
} else if ((digit == 13 || digit == 16) && first == 4) {
  console.log("\nVisa.\n")
}
