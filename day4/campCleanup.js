const fs = require("fs");

function fileToArr(filename) {
  return fs
    .readFileSync(`${filename}.txt`)
    .toString()
    .split("\n")
    .map((x) => {
      return x.split(",").map((y) => y.split("-").map((z) => Number(z)));
    });
}

function part1() {
  const arr = fileToArr("input");
  let count = 0;

  arr.forEach((x) => {
    const [first, second] = x;
    if (first[0] <= second[0] && first[1] >= second[1]) {
      count++;
      return;
    }
    if (second[0] <= first[0] && second[1] >= first[1]) {
      count++;
    }
  });
  return count;
}

function part2() {
  const arr = fileToArr("input");
  let count = 0;

  arr.forEach((x) => {
    const [first, second] = x;
    if (first[0] >= second[0] && first[0] <= second[1]) {
      count++;
      return;
    }
    if (first[1] >= second[0] && first[1] <= second[1]) {
      count++;
      return;
    }
    if (second[0] >= first[0] && second[0] <= first[1]) {
      count++;
      return;
    }
    if (second[1] >= first[0] && second[1] <= first[1]) {
      count++;
      return;
    }
  });
  return count;
}

console.log(part1());
console.log(part2());
