"use strict"

let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// Знайти суму та кількість позитивних елементів за допомогою методу reduce
let sumElem = arr.reduce(function (sum, elem) {
    if (elem >= 0) {
        return sum + elem;
    } else {
        return sum;
    }
}, 0)

let quantity = arr.reduce(function (quan, elem) {
    if (elem >= 0) {
        return quan + 1;
    } else {
        return quan;
    }
}, 0)

console.log(`Sum of all positive elements = ${sumElem} Quantity of positive elements: ${quantity}`);



// Знайти мінімальний елемент масиву та його порядковий номер через звичайний цикл for
// Порядковий номер я зрозумів як індекс елементу, якщо треба було вивести саме який він по черзі то треба вказати так ${minElem + 1}
let minElem = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[minElem]) {
        minElem = i;
    }

}
console.log(`Mininal element is: ${arr[minElem]} Index of mininal element is: ${minElem}`);



// Знайти максимальний елемент масиву та його порядковий номер через цикл for of
// Порядковий номер я зрозумів як індекс елементу, якщо треба було вивести саме який він по черзі то треба вказати так ${maxElem + 1}
let maxElem = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[maxElem]) {
        maxElem = i;
    }
}
console.log(`Maximum element is: ${arr[maxElem]} Index of maximal element is: ${maxElem}`);



// Визначити кількість негативних елементів

let quanMinElem = arr.reduce(function (quanMin, elem) {
    if (elem < 0) {
        return ++quanMin;
    } else {
        return quanMin;
    }
}, 0)
console.log(`Quantity of negative elements: ${quanMinElem}`)



// Знайти кількість непарних позитивних елементів

let oddPos = 0;

for (let i of arr) {
    if (i >= 0 && !(i % 2 == 0)) {
        ++oddPos
    } else {
        oddPos;
    }
}
console.log(`Quantity of odd positive numbers ${oddPos}`)



// Знайти кількість парних позитивних елементів

let EvenPos = 0;

for (let i of arr) {
    if (i >= 0 && (i % 2 == 0)) {
        ++EvenPos;
    } else {
        EvenPos;
    }
}
console.log(`Quantity of even positive numbers ${EvenPos}`)



// Знайти суму парних позитивних елементів.

let sumEvenPos = 0;

for (let i of arr) {
    if (i >= 0 && (i % 2 == 0)) {
        sumEvenPos += i;
    } else {
        sumEvenPos;
    }
}
console.log(`Quantity of even positive numbers ${sumEvenPos}`)



// Знайти суму непарних позитивних елементів.

let sumOddPos = 0;

for (let i of arr) {
    if (i >= 0 && !(i % 2 == 0)) {
        sumOddPos += i;
    } else {
        sumOddPos;
    }
}
console.log(`Quantity of odd positive numbers ${sumOddPos}`)



// Знайти добуток позитивних елементів

let dobutok = arr.reduce(function (dob, elem) {
    if (elem >= 0) {
        return dob *= elem
    } else {
        return dob;
    }
}, 1);

console.log(`Dobutok of positive elements ${dobutok}`)



// Знайти найбільший серед елементів масиву, інші обнулити 

let maxNum = 0;
let zeroing = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[maxNum]) {
        maxNum = i;
        arr[zeroing] = 0;
        zeroing = i;
    } else {
        arr[i] = 0;
    }

}

console.log("Larges element is: " + `${arr[maxNum]} ` + "array zeroed out: " + arr);