"use strict"
//№1 Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
//ВАРІАНТ №1, якщо нам можна змінити початковий масив і залишити там лише числа
let arr = ["Hello", "Java", "31", 2, "Script", 231, 15, "42", "World"];
function arithmeticMean(array) {
    let average = 0;
    for (let i = 0; i < array.length; i++) {
        array = array.filter(i => typeof i === "number")
        average += array[i];
    }
    average = average / array.length;
    return console.log(average);
}
arithmeticMean(arr);

//ВАРІАНТ №2, якщо змінювати початковий масив не можна.
// let arr = ["Hello", "Java", "31", 2, "Script", 231, 15, "42", "World"];
// function arithmeticMean(array) {
//     let emptyArr = [];
//     let average = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (typeof (array[i]) == "string") {
//             continue;
//         } else {
//             emptyArr.push(array[i]);
//         }
//     }
//     for (let i = 0; i < emptyArr.length; i++) {
//         average += emptyArr[i];
//     }
//     average = average / emptyArr.length;
//     return console.log(average);
// }
// arithmeticMean(arr);




























