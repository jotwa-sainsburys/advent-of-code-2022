const fs = require("fs");

function fileToArr(filename) {
  return fs
    .readFileSync(`${filename}.txt`, "utf-8")
    .split("\n")
    .map((x) => x.split(""));
}

function part1() {
  let count = 0;
  const arr = fileToArr("input");

  arr.forEach((row, y) =>
    row.forEach((tree, x) => {
      let column = arr.map((row) => row[x]);
      if (
        row.slice(0, x).every((comparison) => comparison < tree) ||
        row.slice(x + 1).every((comparison) => comparison < tree) ||
        column.slice(0, y).every((comparison) => comparison < tree) ||
        column.slice(y + 1).every((comparison) => comparison < tree)
      )
        count++;
    })
  );

  return count;
}

function part2() {
  let max = 0;
  const arr = fileToArr("input");

  arr.forEach((row, y) =>
    row.forEach((tree, x) => {
      let column = arr.map((row) => row[x]);

      function viewDistance(view) {
        return (
          view.findIndex((comparison) => comparison >= tree) + 1 || view.length
        );
      }

      let left = viewDistance(row.slice(0, x).reverse());
      let right = viewDistance(row.slice(x + 1));
      let top = viewDistance(column.slice(0, y).reverse());
      let bottom = viewDistance(column.slice(y + 1));

      max = Math.max(max, left * right * top * bottom);
    })
  );

  return max;
}

console.log(part1());
console.log(part2());
