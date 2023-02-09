"use strict"
//№1 Дано масив з елементами різних типів.Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
// ВАРІАНТ №1, якщо нам можна змінити початковий масив і залишити там лише числа
let arr = ["Hello", true, null, "Java", "31", 10, "Script", 15, 20, "42", "World"];
function arithmeticMean(array) {
    let average = 0;
    array = array.filter(i => typeof i === "number") // прибрав цикл, теперь фільтрую масив лише раз.
    for (let item of array) {
        average += item;
    }
    average = average / array.length;
    return average;
}
console.log(arithmeticMean(arr));

// ВАРІАНТ №2, якщо змінювати початковий масив не можна.
// let arr = ["Hello", "Java", "31", 10, "Script", 20, 15, "42", "World"];
// function arithmeticMean(array) {
//     let emptyArr = [];
//     let average = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] == "number") { // змінив перевірку на число
//             emptyArr.push(array[i]);
//         } else {
//             continue;
//         }
//     }
//     for (let i = 0; i < emptyArr.length; i++) {
//         average += emptyArr[i];
//     }
//     average = average / emptyArr.length;
//     return average;
// }
// console.log(arithmeticMean(arr));

// //Це третій варіант, і я не зрозумів що тут треба робити далі, коли ми запушили в наш масив простой пустий масив.
// //В цей новий масив треба внести якимось чином всі числа? Але як це зробити, не розумію
// let arr = ["Hello", "Java", "31", 10, "Script", 20, 15, "42", "World"];
// function arithmeticMean(array) {
//     array.push([]);
// }

// console.log(arithmeticMean(arr));


























