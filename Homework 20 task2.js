"use strict"
let arr = [1, 2, 3, 4, 5]
function myReduce(array, callback, initialValue) {
    let sumWithInitial = 0;
    for (let i = 0; i < array.length; i++) {
        sumWithInitial += callback(array[i], initialValue);
    }
    return sumWithInitial;
}


myReduce(arr, (item, initialValue) => initialValue + item, 0) // 15;












