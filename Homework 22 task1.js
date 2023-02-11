"use strict"
function setMath(znak) {
    return function getNum(...numbers) {
        let string = numbers.reduce((accumulator, currentValue) => accumulator + znak + currentValue,
        );
        let result;
        switch (znak) {
            case '+':
                result = numbers.reduce((accumulator, currentValue) => accumulator + currentValue,
                );
                break;
            case "-":
                result = numbers.reduce((accumulator, currentValue) => accumulator - currentValue,
                );
                break;
            case "*":
                result = numbers.reduce((accumulator, currentValue) => accumulator * currentValue,
                );
                break;
            case "/":
                result = numbers.reduce((accumulator, currentValue) => accumulator / currentValue,
                );
                break;
            case "%":
                result = numbers.reduce((accumulator, currentValue) => accumulator % currentValue,
                );
                break;
            case "^":
                result = numbers.reduce((accumulator, currentValue) => accumulator ^ currentValue,
                );
                break;
        }
        return string + " = " + result;
    };
}
let funcWithMath = setMath('-');

let res = funcWithMath(10, 2, 3);
let res_1 = funcWithMath(3, 1);

console.log(res); // 10 - 2 - 3 = 5;
console.log(res_1); // 3 - 1 = 2;























