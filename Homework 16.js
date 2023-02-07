"use strict"
//Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length.
// Додаю до змінної result рандомний символ(через його індекс СharAt) з нашої стрінги з набором символів за допомогою простої математичної функції генерування рандомного числа, яке за допомогою ParseInt роблю цілим, і яке генерується в діапазоні довжини нашої стрінги сharacters;

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
function generateKey(lenght, characters) {
    let result = "";
    for (; result.length < lenght;) {
        result += characters.charAt(parseInt(Math.random() * characters.length));
    }
    console.log(result);
}
generateKey(5, characters);





























