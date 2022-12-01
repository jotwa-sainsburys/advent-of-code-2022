const fs = require("fs");

function fileToArr() {
  const arr = fs
    .readFileSync("elfData.txt")
    .toString()
    .split("\n\n")
    .map((x) => {
      x = x.split("\n");
      return x.map((x) => x * 1).reduce((x, y) => x + y);
    });
  return arr;
}

function partOne() {
  return Math.max(...fileToArr());
}

function partTwo() {
  return fileToArr()
    .sort((x, y) => y - x)
    .slice(0, 3)
    .reduce((x, y) => x + y);
}

console.log(partOne(), partTwo());
