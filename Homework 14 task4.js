"use strict"
//Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
function deleteSymbol(string, symbols) {
    for (let item of symbols) {
        string = string.replaceAll(item, "");
    }
    return string;
}
console.log(deleteSymbol("hello world", ["h", "w"]));






















