const readlineSync = require("readline-sync");

const Min = 1;
const Max = 24;
let row;

let value = Number(readlineSync.question("\nHeight: "));

while ((value < Min) || (value > Max) || Number.isNaN(value) || (!Number.isInteger(value)) ||  !Number.isSafeInteger(value)) {
  value = Number(readlineSync.question("Height: "));
}

console.log("")

for (let i = 1; i <= value; i++) {
  row = "";
  for (let x = 1; x <= (value - i); x++) {
    row = row + " ";
  }
  for (let y = 1; y <= i; y++) {
    row = row + "#";
  }
  console.log(row + "#");
}
console.log("");
