const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

let factor = 1;
let morefactor = 0;
let print;
let value = 0;

console.log()
while (Number.isNaN(value) ||!Number.isInteger(value) || (value >= MIN && value < MAX) || !Number.isSafeInteger(value)){
         value = Number(readlineSync.question("Positive integer: "));
}
while (factor <= Math.floor(Math.sqrt(value))) {
    if (factor <= value) {
         morefactor = value % factor
    if (factor == Math.floor(Math.sqrt(value))) {
         print = print + factor + "."
    break;
      }
    else if ( morefactor == 0){
         print = print + factor + ", " + (value / factor) + ", "
      }
      factor++
      }
    }
console.log("\n" + print + "\n");
