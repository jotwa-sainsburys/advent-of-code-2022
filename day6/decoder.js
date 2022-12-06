const fs = require("fs");

function fileToArr(filename) {
  return fs.readFileSync(`${filename}.txt`, "utf8");
}

function uniqueChars(n) {
  // n = how many unique characters required for starter marker.
  const code = fileToArr("input");
  let moves = n;
  let unique = false;
  for (let i = n; unique !== true; i++) {
    const uniqueSet = new Set([...code.slice(i - n, i)]).size;
    if (uniqueSet === n) {
      moves = i;
      unique = true;
    }
  }
  return moves;
}

console.log(uniqueChars(4));
console.log(uniqueChars(14));
