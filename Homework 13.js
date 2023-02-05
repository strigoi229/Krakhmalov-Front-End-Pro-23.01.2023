"use strict"
let arr = [];
for (let i = 1; i < 11; i++) {
    arr.push(i);
}
console.log(arr);
function removeElement(array, item) {
    array = array.splice(item, 1);
}
//Видалити п'ятий елемент з масиву, тобто елемент з індексом 5.
// Або якщо треба видалити не по індексу, а саме по номеру елемента, то вказати: array = array.splice(--item, 1);
removeElement(arr, 5);
console.log(arr);
































