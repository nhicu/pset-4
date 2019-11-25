const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 78;

var firstnumber = 0;
var fib = 1;
var numero = 0;

let value = Number(readlineSync.question("\nPositive integer: "));
while (Number.isNaN(value) ||!Number.isInteger(value) || value < MIN || value > MAX || !Number.isSafeInteger(value)){
         value = Number(readlineSync.question("Positive integer: "));
}

for (i = 2; i<=value ; i++){
  var numero = firstnumber + fib;
  var firstnumber = fib;
  var fib = numero;
}
console.log("\n" +fib.toLocaleString("en")+".\n")
