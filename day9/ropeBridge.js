const fs = require("fs");

function fileToArr(filename) {
  return fs
    .readFileSync(`${filename}.txt`, "utf-8")
    .split("\n")
    .map((x) => {
      const [dir, moves] = x.split(" ");
      return { dir, moves: Number(moves) };
    });
}

let h = { x: 0, y: 0 };
let t = { x: 0, y: 0 };

function part1(filename) {
  const arr = fileToArr(filename);
  let positions = [];
  for (x of arr) {
    const { dir, moves } = x;
    for (i = 0; i < moves; i++) {
      if (dir === "U") h.y--;
      if (dir === "D") h.y++;
      if (dir === "L") h.x--;
      if (dir === "R") h.x++;

      let xChange = h.x - t.x;
      let yChange = h.y - t.y;

      if (Math.abs(xChange) > 1) {
        t.x = t.x + Math.sign(xChange);
        t.y = h.y;
      } else if (Math.abs(yChange) > 1) {
        t.x = h.x;
        t.y = t.y + Math.sign(yChange);
      }
      positions.push(`${t.x},${t.y}`);
    }
  }
  return positions.filter((x, y) => positions.indexOf(x) === y).length;
}

console.log(part1("input"));
