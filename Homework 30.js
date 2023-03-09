"use strict";
// Як на мене код доволі простий, всі потрібні теги додаємо в змінну list і все, вона в кінці містить наш сформований список.
function createList(array) {
  let list = "<ul>";
  let num = 0; // Число потрібне для нумерації вкладених масивів(Якщо треба як в умові 1.1 1.2 1.3)
  for (let item of array) {
    if (Array.isArray(item)) {
      list += "<li><ul>";
      ++num;
      for (let innerItem of item) {
        list += `<li>${num}.${innerItem}</li>`;
      }
      list += "</ul></li>";
    } else {
      list += `<li>${item}</li>`;
    }
  }
  list += "</ul>";
  document.body.innerHTML = list; // Тут можна додадти цей список куда завгодно по факту, в нашому випадку просто в body.
}

let arr = [1, 2, 3, [1, 2, 3], 4, 5, [1, 2, 3], 6, 7];

createList(arr);
