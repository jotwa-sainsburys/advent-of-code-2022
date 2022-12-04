const fs = require("fs");

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function fileToArr(filename) {
  return fs.readFileSync(`${filename}.txt`).toString().split("\n");
}

function part1() {
  const arr = fileToArr("input");
  const totals = [];
  arr
    .map((x) => {
      const half = x.length / 2;
      return [x.slice(0, half).split(""), x.slice(half)];
    })
    .forEach((x) => {
      const both = [];
      for (i = 0; i < x[0].length; i++) {
        if (x[1].includes(x[0][i])) {
          both.push(x[0][i]);
        }
      }
      let unique = [...new Set(both)];
      unique.forEach((x) => totals.push(alphabet.indexOf(x) + 1));
    });
  return totals.reduce((x, y) => x + y);
}

function part2() {
  const arr = fileToArr("input");
  const total = [];
  for (let i = 0; i < arr.length; i += 3) {
    const triple = [arr[i], arr[i + 1], arr[i + 2]];
    const commonItem = triple[0].split("").find((x) => {
      return triple[1].indexOf(x) !== -1 && triple[2].indexOf(x) !== -1;
    });
    total.push(alphabet.indexOf(commonItem) + 1);
  }

  return total.reduce((x, y) => x + y);
}

console.log(part1());
console.log(part2());
