const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;
let total = 0;
let value = 0;

console.log("\n")
while (Number.isNaN(value) ||!Number.isInteger(value) || (value >= MIN && value < MAX) || !Number.isSafeInteger(value)){
         value = Number(readlineSync.question("Non-negative integer: "));

for (let i = 2; i <value; i++) {
  if (value% i == 0) {
    total = false;
  }
}
if (total) {
  console.log("\nPrime.\n");
} else {
  console.log("\nNot Prime.\n");
}
