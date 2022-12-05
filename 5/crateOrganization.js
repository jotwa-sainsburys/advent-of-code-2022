const fs = require("fs");

function fileInput(filename) {
  const arr = fs.readFileSync(`${filename}.txt`, "utf-8");
  let [crates, instructions] = arr.split("\n\n");
  crates = crates.split("\n").map((x) => x.split(""));
  instructions = instructions
    .split("\n")
    .map((x) => x.split(" ").filter((x) => /\d/g.test(x)));
  return [crates, instructions];
}

// I hardcoded the arrays and feel eternal shame.

function part1() {
  let [crates, instructions] = fileInput("input");
  instructions.forEach((i) => {
    let moves = Number(i[0]);
    while (moves > 0) {
      const startingIndex = i[1] - 1;
      const finishingIndex = i[2] - 1;
      const crateToMove = crates[startingIndex].pop();
      crates[finishingIndex].push(crateToMove);
      moves--;
    }
  });
  return crates.flatMap((x) => x.slice(-1)).join("");
}

function part2() {
  let [crates, instructions] = fileInput("input");
  instructions.forEach((i) => {
    let moves = Number(i[0]);
    while (moves > 0) {
      const startingIndex = i[1] - 1;
      const finishingIndex = i[2] - 1;
      const crateToMove = crates[startingIndex].splice(-moves, 1)[0];
      crates[finishingIndex].push(crateToMove);
      moves--;
    }
  });
  return crates.flatMap((x) => x.slice(-1)).join("");
}

console.log(part1());
console.log(part2());
