"use strict"
//№2 Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

//Я не знаю чи потрібно було робити prompt, але "обидва числа і знак виходять від користувача" я зрозумів так. 
let z = +prompt("Enter first number", '');
let y = +prompt("Enter second number", '');
let znak = prompt("Enter operator", '');;
function doMath(z, znak, y) {
    let result = "";
    switch (znak) {
        case '+':
            result = z + y;
            break;
        case "-":
            result = z - y;
            break;
        case "*":
            result = z * y;
            break;
        case "/":
            result = z / y;
            break;
        case "%":
            result = z % y;
            break;
        case "^":
            result = z ** y;
            break;
    }
    return alert("Result: " + result);
}
doMath(z, znak, y);
























