"use strict"
//Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let row = "";
for (let i = 20; i < 31; i += (0.5)) {
    if (i == 30.5) break;
    row += i + " ";
}
console.log(row + "");

//Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
let convert = 0;
let dollars = 0;
for (let i = 10; i < 101; i += 10) {
    for (let j = 10; j < 101; j += 10) {
        dollars += j;
        break;
    }
    convert = i * 27;
    console.log(`${dollars}` + "\t" + " dollars is: " + convert + "\t" + " hryvnias");
}

//Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
let num = 1000;
let allNum = [];
for (let i = 1; i < 101; i++) {
    if ((i ** 2) > num) {
        break;
    } else {
        allNum.push(i);
    }

}
console.log(`${allNum}`)

//Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе)
function isPrimeNumber(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return console.log("Not a prime number");
        }
    };
    return console.log("Prime number");
}

isPrimeNumber(7);

//Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

function isTrue(num) {
    for (let i = 2; i < 45; i++) {
        if (num == 3 ** i) {
            return console.log("True");
        }
    };
    return console.log("False");
}

isTrue(81);


















