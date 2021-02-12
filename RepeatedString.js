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

// Complete the repeatedString function below.
function repeatedString(s, n) {
  // número de veces que la cadena se puede repetir dentro de n
  const numOfRepeats = Math.floor(n / s.length);
  // número adicional de cadenas para llegar a n
  const remainderString = n % s.length;
  // encontrar el número de coincidencias en la cadena
  let matches = (s.match(/a/g) || []).length; // match(regex) si no arreglo vacio.
  // multiplica el número de coincidencias en la cadena con el número de repeticiones
  matches = matches * numOfRepeats;
  // encontrar el número de coincidencias en la cadena restante
  const remainderMatches = (s.substring(0, remainderString).match(/a/g) || [])
    .length;

  // se agrega al numero de coincidencias * repeticiones.
  return matches + remainderMatches;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const n = parseInt(readLine(), 10);

  let result = repeatedString(s, n);

  ws.write(result + "\n");

  ws.end();
}
