const fs = require("fs");

function readFile(filename) {
  return fs.readFileSync(`${filename}.txt`).toString().split("\n");
}

function part1() {
  let score = 0;
  const arr = readFile("input");
  arr.forEach((x) => {
    switch (x[0]) {
      case "A":
        if (x[2] === "X") {
          score += 4;
        }
        if (x[2] === "Y") {
          score += 8;
        }
        if (x[2] === "Z") {
          score += 3;
        }
        break;
      case "B":
        if (x[2] === "X") {
          score += 1;
        }
        if (x[2] === "Y") {
          score += 5;
        }
        if (x[2] === "Z") {
          score += 9;
        }
        break;
      case "C":
        if (x[2] === "X") {
          score += 7;
        }
        if (x[2] === "Y") {
          score += 2;
        }
        if (x[2] === "Z") {
          score += 6;
        }
        break;
    }
  });
  return score;
}

function part2() {
  let score = 0;
  const arr = readFile("input");
  arr.forEach((x) => {
    switch (x[0]) {
      case "A":
        if (x[2] === "X") {
          score += 3;
        }
        if (x[2] === "Y") {
          score += 4;
        }
        if (x[2] === "Z") {
          score += 8;
        }
        break;
      case "B":
        if (x[2] === "X") {
          score += 1;
        }
        if (x[2] === "Y") {
          score += 5;
        }
        if (x[2] === "Z") {
          score += 9;
        }
        break;
      case "C":
        if (x[2] === "X") {
          score += 2;
        }
        if (x[2] === "Y") {
          score += 6;
        }
        if (x[2] === "Z") {
          score += 7;
        }
        break;
    }
  });
  return score;
}

console.log(part1() + " <-- Part 1");
console.log(part2() + " <-- Part 2");
