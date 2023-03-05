"use strict"
// Створив текстове поле, додав йому id "field";
let input = document.createElement("input");
document.body.append(input);
input.type = "text";
input.id = "field";
// -------------------

// Знаходимо текстове поле по id, додаємо після нього елемент div;
let field = document.querySelector("#field");
let div = document.createElement("div");
field.after(div);
// -------------------

// Робимо div невидимим через display:none;
div.style.display = "none";
div.innerHTML = "DIV";
// -------------------

// Відстежуємо фокус чи зникнення фокусу на текстовому полі. Змінюємо display елемента div.
input.onfocus = function () {
    div.style.display = "inline";
}

input.onblur = function () {
    div.style.display = "none";
}
// ------------------

// РІШЕННЯ №2 через оброблювач подій
// function show() {
//     div.style.display = "inline";
// }
// function hidden() {
//     div.style.display = "none";
// }
// field.addEventListener("focus", show);
// field.addEventListener("blur", hidden);
// ------------------------------------






















