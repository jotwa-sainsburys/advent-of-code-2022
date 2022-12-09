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

function part2(filename) {
  const arr = fileToArr(filename);

  let visited = [];

  let h = { x: 0, y: 0 };
  let t = Array(9)
    .fill()
    .map(() => ({ x: 0, y: 0 }));

  for (x of arr) {
    const { dir, moves } = x;
    for (let step = 0; step < moves; step++) {
      if (dir === "U") h.y--;
      if (dir === "D") h.y++;
      if (dir === "L") h.x--;
      if (dir === "R") h.x++;

      t.forEach((tail, index) => {
        let prev = t[index - 1] || h;
        let xchange = prev.x - tail.x;
        let yChange = prev.y - tail.y;

        if (Math.abs(xchange) > 1 && Math.abs(yChange) > 1) {
          tail.x = tail.x + Math.sign(xchange);
          tail.y = tail.y + Math.sign(yChange);
        } else if (Math.abs(xchange) > 1) {
          tail.x = tail.x + Math.sign(xchange);
          tail.y = prev.y;
        } else if (Math.abs(yChange) > 1) {
          tail.x = prev.x;
          tail.y = tail.y + Math.sign(yChange);
        }
      });

      visited.push(`${t.at(-1).x},${t.at(-1).y}`);
    }
  }

  return visited.filter((x, y) => visited.indexOf(x) === y).length;
}

console.log(part1("input"));
console.log(part2("input"));
