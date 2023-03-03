"use strict"
let createTable = document.createElement("table"); // Створили <table></table>
document.body.append(createTable); // Вставляємо <table></table> в HTML

let num = 1; // змінна з числом необхідна для заповнення таблиці

for (let i = 0; i < 10; i++) {
    let tr = document.createElement("tr"); // Створюємо tr
    document.body.children[0].append(tr); // Додаємо кожну ітерацію по одному <tr></tr> в нашу таблицю
    for (let j = 0; j < 10; j++) {
        let td = document.createElement("td"); // Створюємо tв
        document.body.firstElementChild.children[i].append(td) // Додаємо кожну ітерацію по одному <td></td> в наш <tr></tr>
        document.body.firstElementChild.children[i].children[j].innerHTML = num++ // Одразу записуємо число в кожен наступний тег <td></td>
    }
}






















