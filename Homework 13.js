"use strict"
//Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
let arr = ["j", 3, "s", "v", 412, "a", "script", false];
console.log(arr);
let result = 0;
function removeElement(array, item) {
    result = array.indexOf(item);
    if (result == -1) {
        console.log("element not found");
    } else {
        array = array.splice(result, 1)
    }
}
removeElement(arr, "s");
console.log(arr)





























