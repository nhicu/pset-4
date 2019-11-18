const readlineSync = require("readline-sync");


let lowerb = -1;
let upperb = 1;

do {
lowerb = Number(readlineSync.question("Lower bound: "));
upperb = Number(readlineSync.question("Upper bound: "));
} while (lowerb>>upperb || Number.isNaN(Lowerb) || Number.isNaN(Upperb));

let sum = 0;
for(let i = lowerb; i<=upperbound; )
