'use strict';

// In the range 1 - 13 (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13) the digit 1 occurs 6 times.
// In the range, 1 - 2,660 (half the number of Romans in a legion), expressed in Roman numerals, how many times does the numeral “X” occur?

const ROMAN_NUMBERS = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function getConcurrences(iterations = 2660) {
  let cont = 0;
  for (let i = 0; i <= iterations; i++) {
    let romanNumber = integerToRoman(i).toString();
    if (romanNumber.indexOf('X') > -1) {
      cont += romanNumber.match(/X/g).length;
    }
  }
  return cont;
}

function integerToRoman(integer) {
  let romanNumber = '';
  for (let i in ROMAN_NUMBERS) {
    romanNumber += i.repeat(Math.floor(integer / ROMAN_NUMBERS[i]));
    integer = integer % ROMAN_NUMBERS[i];
  }
  return romanNumber;
}

console.log(getConcurrences());