const fs = require("fs");

function fileToArr(filename) {
  return fs.readFileSync(`${filename}.txt`, "utf-8").split("\n");
}

class Directory {
  constructor(dirName, parent = "") {
    this.name = dirName;
    this.parent = parent;
    this.children = {};
    this.files = {};
  }

  addFile(fileName, size) {
    this.files[fileName] = size;
  }

  getFileSize() {
    return (
      Object.values(this.files).reduce((x, y) => x + y, 0) +
      Object.values(this.children)
        .map((child) => child.getFileSize())
        .reduce((x, y) => x + y, 0)
    );
  }
}

function terminalTranslator() {
  const commandLine = fileToArr("input");
  const root = new Directory("/");
  let currentDirectory = root;

  commandLine.forEach((command) => {
    if (command.startsWith("$")) {
      const action = command.slice(2, 4);
      if (action === "cd") {
        const destinationFolder = command.slice(5);
        if (destinationFolder === "..")
          currentDirectory = currentDirectory.parent;
        else if (destinationFolder === "/") currentDirectory = root;
        else currentDirectory = currentDirectory.children[destinationFolder];
      }
    } else if (command.startsWith("dir")) {
      const dirName = command.slice(4);
      currentDirectory.children[dirName] = new Directory(
        dirName,
        currentDirectory
      );
    } else {
      const [fileSize, fileName] = command.split(" ");
      currentDirectory.addFile(fileName, Number(fileSize));
    }
  });
  return root;
}

function part1(directory) {
  let fileSum = 0;
  const arr = [directory];
  while (arr.length > 0) {
    currentDirectory = arr.shift();
    dirSize = currentDirectory.getFileSize();
    if (dirSize <= 100000) fileSum += dirSize;
    Object.values(currentDirectory.children).forEach((directory) =>
      arr.push(directory)
    );
  }
  return fileSum;
}

function part2(directory) {
  let smallestDir = 70000000;
  const spaceRequired = 30000000 - (70000000 - directory.getFileSize());
  const arr = [directory];
  while (arr.length > 0) {
    currentDirectory = arr.shift();
    dirSize = currentDirectory.getFileSize();
    if (dirSize >= spaceRequired && dirSize <= smallestDir)
      smallestDir = dirSize;
    Object.values(currentDirectory.children).forEach((directory) =>
      arr.push(directory)
    );
  }
  return smallestDir;
}

console.log(part1(terminalTranslator()));
console.log(part2(terminalTranslator()));
