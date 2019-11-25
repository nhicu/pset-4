const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;
let total = 0;

let value = Number(readlineSync.question("\nNon-negative integer: "));
while (Number.isNaN(value) ||!Number.isInteger(value) || value < MIN || value > MAX || !Number.isSafeInteger(value)){
         value = Number(readlineSync.question("Non-negative integer: "));
}
for (let i = 2; i <value; i++) {
  if (value% i == 0) {
    total = false;
  } else {
    total = true;
  }
}
if (total) {
  console.log("\nPrime.\n");
} else {
  console.log("\nNot Prime.\n");
}
