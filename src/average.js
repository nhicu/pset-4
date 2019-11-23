const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

let numero = 0;
let sum = 0;
let average = 0;
let value = 0;


while (Number.isNaN(value) || !Number.isInteger(value) || value >= MIN ||value < MAX || !Number.isSafeInteger(value));{
         value = Number(readlineSync.question("Non-negative integer: "));
if(value>MIN) {
    sum = value + sum;
             ++numero;
           }
         }
if (value<MIN){
  average = sum / numero;
  average = average.toLocaleString ('en', {minimumFractionDigits : 3 , maximimFractionDigits: 3});
  console.log("\n" + average + ".\n")
}
