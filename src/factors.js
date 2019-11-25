const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;
let final = ""

let value = Number(readlineSync.question("\nPositive integer: "));
while (Number.isNaN(value) ||!Number.isInteger(value) || value < MIN || value > MAX || !Number.isSafeInteger(value)){
         value = Number(readlineSync.question("Positive integer: "));
}

for(let i = 2; i < (value / i); i++){
  if ( value % i == 0){
   final +=  ", " + i + ", ";
   final += (value / i) + "";
  }
}
if (value % Math.sqrt(value) == 0){
  final += ", " + Math.sqrt(value);
}
console.log("\n1, " + value + final + ".\n")
