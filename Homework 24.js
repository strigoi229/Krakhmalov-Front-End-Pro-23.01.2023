"use strict"
// Створив псевдомасив(HTML collection) з усіма тегами <tr></tr> і просто перебрав цей псевдомасив і потрібний мені тег td через цикл, додаючи колір до нього.
let allTr = document.getElementsByTagName("tr");
for (let i = 0; i < allTr.length; i++) {
    allTr[i].children[i].style.backgroundColor = "red";
}

























