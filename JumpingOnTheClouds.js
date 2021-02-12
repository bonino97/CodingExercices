"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
  let jumps = 0;
  for (let i = 0; i < c.length - 1; jumps++) {
    i += c[i + 2] === 0 ? 2 : 1; // Si en la proxima posicion tengo un 0, entonces avanzo dos posiciones en el index. De lo contrario avanzo 1, siempre los saltos avanzan de a 1.
  }
  return jumps;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const c = readLine()
    .split(" ")
    .map((cTemp) => parseInt(cTemp, 10));

  let result = jumpingOnClouds(c);

  ws.write(result + "\n");

  ws.end();
}
