const readlineSync = require("readline-sync");

let x = 1;
let c = 0;
let a = 0;
const MIN = 1000000000000;
const MAX = 9999999999999999;
let c2;
let s = 0;
let d1 = 0;
let d2 = 0;
let sid = 0;
let d = 0;

console.log();
do {
  c = Number(readlineSync.question("Number: "));
} while (c < MIN || c > MAX || Number.isNaN(c) || !Number.isInteger(c))
ct = c;
while (ct >= 1) {
  ct = ct / 10;
  d = d + 1;
}
d1 = Math.floor(c / 10 ** (d - 1));
d2 = (Math.floor(c / 10 ** (d - 2)) / 10) * 10;

for (let l = 0; l < d; l++) {
  sid = (c - Math.floor(c / 10) * 10);
  c = Math.floor(c / 10);
  if (l % 2 == 1) {
    if (sid * 2 >= 10) {
      a = a + ((sid * 2 - sid * 2 % 10) / 10 + sid * 2 % 10);
    } else if (sid * 2 < 10) {
      a = a + sid * 2;
    }
  } else {
    a = a + sid;
  }
  ++x;
}
if (a / 10 % 1 != 0) {
  console.log("\nInvalid.\n")
} else if (d == 15 && (d2 == 34 || d2 == 37)) {
  console.log("\nAmex.\n")
} else if (d == 16 && (d2 <= 55 && d2 >= 51)) {
  console.log("\nMastercard.\n")
} else if ((d == 13 || d == 16) && d1 == 4) {
  console.log("\nVisa.\n")
