"use strict"
// Спочатку зробив дуже некрасиво, через цикл
// let ul = document.querySelector("#ul");
// for (let i = 0; i < 2; i++) {
//     let li = document.createElement("li")
//     ul.children[i].after(li);
//     ul.children[i].nextSibling.innerHTML = i + 2;
// }

//Потім знайшов через метод insertAdjacentHTML
// Просто по id, як виявилось навіть нічого не треба шукати через querySelector і тому подібне.
one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');






















