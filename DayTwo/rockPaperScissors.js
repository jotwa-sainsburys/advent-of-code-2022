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
        switch (x[2]) {
          case "X":
            score += 4;
            break;
          case "Y":
            score += 8;
            break;
          case "Z":
            score += 3;
            break;
        }
        break;
      case "B":
        switch (x[2]) {
          case "X":
            score += 1;
            break;
          case "Y":
            score += 5;
            break;
          case "Z":
            score += 9;
            break;
        }
        break;
      case "C":
        switch (x[2]) {
          case "X":
            score += 7;
            break;
          case "Y":
            score += 2;
            break;
          case "Z":
            score += 6;
            break;
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
        switch (x[2]) {
          case "X":
            score += 3;
            break;
          case "Y":
            score += 4;
            break;
          case "Z":
            score += 8;
            break;
        }
        break;
      case "B":
        switch (x[2]) {
          case "X":
            score += 1;
            break;
          case "Y":
            score += 5;
            break;
          case "Z":
            score += 9;
            break;
        }
        break;
      case "C":
        switch (x[2]) {
          case "X":
            score += 2;
            break;
          case "Y":
            score += 6;
            break;
          case "Z":
            score += 7;
            break;
        }
        break;
    }
  });
  return score;
}

console.log(part1() + " <-- Part 1");
console.log(part2() + " <-- Part 2");
