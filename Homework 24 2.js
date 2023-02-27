"use strict"
// Ще знайшов рішення з використанням спеціальних властивостей таблиці rows та cells
// table.rows – колекція <tr> всередині.
// tr.cells – колекція клітинок <td> всередені.
let table = document.body.firstElementChild;
for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
}

























