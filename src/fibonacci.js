const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 78;

let firstnumber = 0;
let fib = 1;
let numero
let value = Number(readlineSync.question("\nPositive integer: "));

while (Number.isNaN(value) ||!Number.isInteger(value) || value < MIN || value > MAX || !Number.isSafeInteger(value)){
         value = Number(readlineSync.question("Positive integer: "));
}

for (i = 2; i<=value ; i++){
  let numero = firstnumber + fib;
  let firstnumber = fib;
  let fib = numero;
}
console.log("\n" +numero.toLocaleString("en")+".\n")
