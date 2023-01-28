"use strict"

let operation = prompt("Choose operation: add, sub, mult, div",);

// Перший if. Перевірка чи ввів користувач add, sub, mult чи div, якщо ввів щось інше то запитати його знову, й так поки юзер не введе add або sub або mult або div. Якщо нажав esc або пуста строка то вивести "Canseled or nothing entered"
if (operation) {
    for (; !(operation === "add") && !(operation === "sub") && !(operation === "mult") && !(operation === "div"); operation = prompt("Choose operation: add, sub, mult, div",)) {
        alert("sorry, you did not enter any of the options")
    }
    // Другий if. Перевірка яку дію потрібно виконати та запит двох чисел.
    if (operation === "add") {
        let num = prompt("Enter two numbers separated by commas");
        // Третій if. Виконанная запрошеної операції(add,sub,mult чи div). Якщо натиснуто esc або пуста строка, знову вивести "Canseled or nothing entered"
        if (num) {
            let arr1 = [];
            arr1 = num.split(",")
            for (let i = 0; i < arr1.length; i++) {
                arr1[i] = +arr1[i];
            }
            let initialValue = 0;
            let sumWithInitial = arr1.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                initialValue);
            let elements = arr1.reduce((accumulator, currentValue) => accumulator + " + " + currentValue,);
            alert(`${elements}` + " = " + `${sumWithInitial}`)
        } else {
            alert("Canseled or nothing entered");
        }
    } else if (operation === "sub") {
        let num = prompt("Enter two numbers separated by commas");
        if (num) {
            let arr2 = [];
            arr2 = num.split(",")
            for (let i = 0; i < arr2.length; i++) {
                arr2[i] = +arr2[i];
            }
            let subtraction = arr2[0] - arr2[1];
            let result = arr2[0] + " - " + arr2[1] + " = " + subtraction;
            alert(result)
        } else {
            alert("Canseled or nothing entered");
        }
    } else if (operation === 'mult') {
        let num = prompt("Enter two numbers separated by commas");
        if (num) {
            let arr3 = [];
            arr3 = num.split(",")
            for (let i = 0; i < arr3.length; i++) {
                arr3[i] = +arr3[i];
            }
            let initialValue = 1;
            let sumWithInitial = arr3.reduce(
                (accumulator, currentValue) => accumulator * currentValue,
                initialValue);
            let elements = arr3.reduce((accumulator, currentValue) => accumulator + " * " + currentValue,);
            alert(`${elements}` + " = " + `${sumWithInitial}`)

        } else {
            alert("Canseled or nothing entered");
        }

    } else {
        let num = prompt("Enter two numbers separated by commas");
        if (num) {
            let arr4 = [];
            arr4 = num.split(",")
            for (let i = 0; i < arr4.length; i++) {
                arr4[i] = +arr4[i];
            }
            let division = arr4[0] / arr4[1];
            let result = arr4[0] + " / " + arr4[1] + " = " + division;
            alert(result)


        } else { alert("Canseled or nothing entered"); }
    }
} else {
    alert("Canseled or nothing entered");
}








