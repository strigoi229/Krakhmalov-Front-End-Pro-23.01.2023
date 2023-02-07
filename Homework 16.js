"use strict"
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
function generateKey(lenght, characters) {
    let result = "";
    for (; result.length < lenght;) {
        result += characters.charAt(parseInt(Math.random() * characters.length));
    }
    console.log(result);
}
generateKey(5, characters);





























