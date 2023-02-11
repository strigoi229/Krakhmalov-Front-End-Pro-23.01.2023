"use strict"
function setNumbers(...numbers) {
    return function getOperator(znak) {
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
let whatDo = setNumbers(10, 2, 3);
let whatDo_1 = setNumbers(3, 1);

console.log(whatDo('-')); // 10 - 2 - 3 = 5;
console.log(whatDo_1('+')); // 3 + 1 = 4;























