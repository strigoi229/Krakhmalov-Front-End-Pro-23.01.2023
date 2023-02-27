"use strict"

document.querySelector("div"); // Поверне перший div, а він у нас один, в даному випадку.
document.getElementsByTagName("div"); // Поверне "Живу" HTML collection елементів з тегом який ми вказали(в нашому випадку у нас єдиний тег div), жива, тобто яка автоматично оновлюється, якщо відбуваються зміни.
document.body.firstElementChild;
document.body.children[0]; // як я зрозумів, в children лише вузли-елементи, тому наш div буде першим чайлдом[0].
document.body.childNodes[1]; // А це навігація по усім елементам, тобто і текстові вузли і коментарі. Тому треба вказати [1], бо перший[0] це пробіл



document.querySelector("ul");
document.getElementsByTagName("ul");
document.body.lastElementChild;
document.body.children[1];
document.body.childNodes[3];




document.body.lastElementChild.lastElementChild;


























