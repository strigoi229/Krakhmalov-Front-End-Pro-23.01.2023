"use strict"
//Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
let str = prompt("Enter some string", "");
let toDelete = prompt("Enter the symbols by comma to be removed", "");

function deleteSymbol(string, symbols) {
    let toArray = symbols.split(",");
    for (let item of toArray) {
        string = string.replaceAll(item, "");
    }
    return console.log(string);
}
deleteSymbol(str, toDelete);






















