"use strict"

let arr = [19, 50, 33, 23, 1]


function filter(array, callback) {
    let obj = {
        right: [],
        wrong: [],
    }
    for (let item of array) {
        if (callback(item)) {
            obj.right.push(item);
        } else {
            obj.wrong.push(item);
        }
    }
    return obj;
}

const { right, wrong } = filter(arr, item => item > 20);

console.log(right); // Тут елементи, які пройшли перевірку, item > 20
console.log(wrong); // Тут елементи, які не пройшли перевірку





