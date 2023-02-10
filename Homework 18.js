"use strict"
function closureFunc(count) {
    return function add(num) {
        count += num;
        return count;
    };
}
let sum = closureFunc(0);
sum(10); // 10
sum(15); // 25




















