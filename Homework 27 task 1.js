"use strict"
function Mapping(someObject, callback) {
    if (Array.isArray(someObject)) { // Перевіпрка чи є переданий аргумент масивом.
        let newArray = [];
        for (let i = 0; i < someObject.length; i++) {
            newArray.push(callback(someObject[i], i)) // З масивом впевнений що правильно, вже таке робили.
        }
        return newArray;
    } else if ((typeof someObject === "object")) { // Перевіпрка чи є переданий аргумент об'єктом, але також перевіряти на null, бо як відомо typeof null == object.
        let newObject = {};
        for (let key in someObject) {
            newObject[key] = callback(someObject[key]) // Тут я беру для нового об'єкту ключ з переданого об'єкту, і записую туди значення. Але значення можна змінити чи перезаписати перед додаванням за допомогаю функції колбек. Якщо я правильно розумію, функція має отримувати об'єкт, робити в ньому зміни і повертати новий об'єкт з цими змінами. Типу я функції колбек передаю як параметр саме значення, а не ключ. Можливо неправильно розумію, якщо так, допоможіть будь ласка зрозуміти.
        }
        return newObject;
    } else {
        alert("Need to pass an object or array as the first argument")
    }
}

let test = {
    1: "1",
    2: "2",
    3: "3",
}

Mapping(test, key =>  // Тут наприклад ми кожне значення помножили на 2, повернули новий об'єкт з новими значеннями.
    test[key] * 2
)

//Результат
//  newObject = {
//     1: "2",
//     2: "4",
//     3: "6",
// }














