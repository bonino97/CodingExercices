'use strict';
// The Fibonacci sequence begins like this:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// (each number is the sum of the previous two)
// What is the sum of all odd numbers in the Fibonacci sequence that are less than 10,000?

function sumPreviousValues(lastValue, currentValue) {
  // lastValue is 'n-1' ; currentValue is 'n'
  return lastValue + currentValue;
}

function isOdd(value) {
  return value % 2;
}

function applyFibonacci() {
  const MAX_VALUE = 10;
  let lastValue = 0;
  let currentValue = 1;
  let sum = 0;
  let oddSum = 1;
  for (let i = 0; i <= MAX_VALUE; i++) {
    sum = sumPreviousValues(lastValue, currentValue);
    lastValue = currentValue;
    currentValue = sum;
    if (isOdd(currentValue) !== 0 && currentValue <= MAX_VALUE) {
      oddSum += currentValue;
    }
  }
  return oddSum;
}

applyFibonacci();
