"use strict"
//№3 Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

let question = prompt("Enter separated by commas: lengthMainArray, lenghtInternalArrays, element1, element2, .....", "")
let arr = [];
function runFilling(data, array) {
    let toArr = data.split(',');
    let firstLenght = +(toArr.at(0));
    for (let i = 0; i < firstLenght; i++) {
        array.push([]);
    }
    let secondLenght = +(toArr.at(1));
    toArr.splice(0, 2)
    for (let item of array) {
        for (let i = 0; i < secondLenght; i++) {
            item.push(toArr.at(i))
        }
        toArr.splice(0, secondLenght)
    }
    return console.log(arr);
}
runFilling(question, arr)
























