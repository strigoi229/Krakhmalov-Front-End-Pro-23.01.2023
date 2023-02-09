"use strict"
//Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b
    };
}
let minNum = min(5, 100);
console.log(minNum);

//Напишіть функцію pow(x, n), яка повертає число x в степені n
function pow(x, n) {
    return x ** n;
}
let res = pow(2, 3);
console.log(res);




























