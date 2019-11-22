const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_SAFE_INTEGER

let lowerb = -1;
let upperb = 1;

console.log();
do {
  lowerb = Number(readlineSync.question("Lower bound: "));
  upperb = Number(readlineSync.question("Upper bound: "));
} while (Number.isNaN(lowerb) ||
         Number.isNaN(upperb) ||
         !Number.isInteger(lowerb) ||
         !Number.isInteger(upperb) |
         !Number.isSafeInteger(lowerb) ||
         !Number.isSafeInteger(upperb) ||
         lowerb >= upperb);

let sum = 0;

for (let i = lowerb; i <= upperb; i++) {

  if (i % 2 === 0) {
    sum = (sum + i);
    }
}
  console.log(`\n${sum.toLocaleString()}.\n`);
