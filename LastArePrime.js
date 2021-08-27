
// Write a function:

// function solution(X);

// Escriba una función que devuelva todos los números primos anteriores al numero pasado por parámetro.

// En caso de que no existan números primos anteriores, se debe devolver un array vacío.


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(x) {
    let primeNumbers = [];
    for (let i = 0; i < x; i++) {
        if(isPrime(i)) primeNumbers.push(i);
    }
    return primeNumbers;
}

function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}