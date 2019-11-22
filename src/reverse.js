const readlineSync = require("readline-sync");

const MIN = 1
const MAX = Number.MAX_SAFE_INTEGER


let digit = "";
let value = Number(readlineSync.question("\nPositive integer: "));
while (Number.isNaN(value) ||
         !Number.isInteger(value) ||
         value < 1 ||
         !Number.isSafeInteger(value)) {
         value = Number(readlineSync.question("Positive integer: "));
       }

while (value>0){
  let product = value%10;
  value = Math.floor(value/10) ;

  if (value > .1){
    digit = digit + product + ", ";
  }
  else {
    digit = digit + product + ".\n";
  }
}
console.log("\n" + digit);
