'use strict';

// A palindrome is a word, number, phrase, or another sequence of characters which reads the same backward as forward, such as madam, racecar, or the number 108001
// What is the sum of all numeric palindromes that are less than 10,000?

function isPalindrome(number) {
  let convertNumberToString = number.toString();
  let numberToArray = convertNumberToString.split('');
  for (let i of numberToArray) {
    if (i !== numberToArray.pop()) {
      return false;
    }
  }
  return number;
}


function countPalindromes() {
    let cont = 0;
    const finalValue = 10000;
    for (let i = 0; i <= finalValue; i++) {
        if(isPalindrome(i) !== false) {
            cont += i;
        }
    }
    return cont;
}

countPalindromes();