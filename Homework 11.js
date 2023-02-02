"use strict"
//Створити масив, довжину та елементи якого задає користувач.
let contents = prompt("Enter the items because of coma", '');
let arr = contents.split(',');
console.log("The resulting array: " + arr);

//Відсортувати масив за зростанням(Якщо відсортувати треба числа за зростанням)
arr.sort(function (a, b) {
    return a - b;
});
console.log("Sorted array: " + arr)

// Якщо просто в алфавітному порядку у зростаючому напрямку то(ЗАСТОСОВУЄТЬСЯ Unicode):
// arr.sort();
// console.log(arr)

//Видалити елементи з масиву з 2 по 4 (включно!)
//ЯКЩО МАЛОСЬ НА УВАЗІ ВИДАЛИТИ ЕЛЕМЕНТИ ПОЧИНАЮЧИ З ІНДЕКСУ 2 по 4, ТОДІ arr.splice(2, 3);
arr.splice(1, 3);
console.log("Deleted items: " + arr);
















