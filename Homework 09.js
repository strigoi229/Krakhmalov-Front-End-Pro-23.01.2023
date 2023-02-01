"use strict"
// Вивести на сторінку в один рядок через кому числа від 10 до 20.
let arrFirst = [];
for (let i = 10; i < 21; i++) {
    arrFirst.push(i);
}
console.log(`${arrFirst}`);

// Вивести квадрати чисел від 10 до 20.
let arrSecond = [];
for (let i = 10; i < 21; i++) {
    let num = i * i;
    arrSecond.push(num);
}
console.log("squares: " + `${arrSecond}`)

//Вивести таблицю множення на 7.
for (let i = 1; i < 11; i++) {
    let seven = i + " * " + "7" + " = " + i * 7;
    console.log(`${seven}`)
}

//Знайти суму всіх цілих чисел від 1 до 15.
let arrThird = [];
let sum = 0;
for (let i = 1; i < 16; i++) {
    arrThird.push(i);
}

for (let item of arrThird) {
    sum += item;
}
console.log("Sum of numbers from 1 to 15: " + sum);

//Знайти добуток усіх цілих чисел від 15 до 35.
let arrFourth = [];
let dobutok = 1;
for (let i = 15; i < 36; i++) {
    arrFourth.push(i);
}

for (let item of arrFourth) {
    dobutok *= item;
}
console.log("The product of numbers from 15 to 35: " + BigInt(dobutok));

//Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let arrFifth = [];
let med = 0;
for (let i = 1; i < 501; i++) {
    arrFifth.push(i);
}

for (let item of arrFifth) {
    med += item;
}

console.log("Arithmetical meanmed: " + med / 500);

//Вивести суму лише парних чисел в діапазоні від 30 до 80.
let arrSixth = [];
let even = 0;
for (let i = 30; i < 81; i++) {
    arrSixth.push(i);
}

for (let item of arrSixth) {
    if (item % 2 == 0) {
        even += item;
    }
}

console.log("Sum of even number: " + even);

//Вивести всі числа в діапазоні від 100 до 200 кратні 3.
let arrSeventh = [];
let arrResult = []
for (let i = 100; i < 201; i++) {
    arrSeventh.push(i);
}

for (let item of arrSeventh) {
    if (item % 3 == 0) {
        arrResult.push(item)
    }
}

console.log("multiples of three: " + `${arrResult}`)

//Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
let numSec = 24;
let arrDilniki = [];
for (let i = 1; i <= numSec; i++) {
    if (numSec % i == 0) {
        arrDilniki.push(i);
    }
}

console.log("Dividers: " + `${arrDilniki}`);

//Визначити кількість його парних дільників.
let evenSecond = [];
for (let item of arrDilniki) {
    if (item == 1) continue;
    if (item % 2 == 0) {
        evenSecond.push(item);
    }
}

console.log("Number of divisors: " + evenSecond.length)

//Знайти суму його парних дільників.
let sumEven = 0;
for (let item of evenSecond) {
    sumEven += item;
}

console.log("Sum of divisors: " + sumEven);

//Надрукувати повну таблицю множення від 1 до 10.

let row = '';
{
    for (let i = 1; i < 11; i++) {
        for (let j = 1; j < 11; j++) {
            row += (j * i) + " ";
        }
        console.log(row);
        row = '';
    }

}












