"use strict"
let store = [
    {
        category: "Computers",
        products: [{
            name: "Asus",
            description: "Some information about Asus Some information about Asus Some information about Asus",
        },
        {
            name: "Lenovo",
            description: "Some information about Lenovo Some information about Lenovo Some information about Lenovo",

        },
        {
            name: "Acer",
            description: "Some information about Acer Some information about Acer Some information about Acer",
        }]
    },
    {
        category: "TV",
        products: [{
            name: "LG",
            description: "Some information about LG Some information about LG Some information about LG",
        },
        {
            name: "Samsung",
            description: "Some information about Samsung Some information about Samsung Some information about Samsung",
        },
        {
            name: "Philips",
            description: "Some information about Philips Some information about Philips Some information about Philips",
        },

        {
            name: "Sony",
            description: "Some information about Sony Some information about Sony Some information about Sony",
        }]
    },
    {
        category: "Telephones",
        products: [{
            name: "Iphone",
            description: "Some information about Iphone Some information about Iphone Some information about Iphone",
        },

        {
            name: "Xiaomi",
            description: "Some information about Xiaomi Some information about Xiaomi Some information about Xiaomi",
        }]
    },

]
// Необхідні елементи з HTML та створення кнопки для здійснення покупки.
let characteristics = document.querySelector(".characteristics");
let products = document.querySelector(".products");
let buy = document.createElement("button");
buy.innerHTML = "Click to buy";
// ---------------------------------------------------------------------

// Створення div з категоріями товарів з нашого об'єкту store
for (let i = 0; i < store.length; i++) {
    let div = document.createElement("div");
    div.className = "ctg";
    div.innerHTML += store[i].category;
    let categoryes = document.querySelector(".categoryes");
    categoryes.append(div);
}
// -----------------------------------------------------------

// Відстежувач кліку для кнопки "Купити". який після кліку залишить лише список категорій.
buy.addEventListener("click", bought)
function bought() {
    alert("The product is purchased!")
    products.innerHTML = null;
    characteristics.innerHTML = null;
}
//  -------------------------------------------------------------------------------------

// Повісили відстежувач кліку на кожну категорію товарів.
let allCategoryes = document.querySelectorAll(".ctg")
for (let item of allCategoryes) {
    item.addEventListener("click", showProd)
}
//

// Вийшла велика функція
//Перший відрізок перевіряє на яку саме категорію натиснув юзер, і після нового натискання чистить усі блоки.
function showProd(e) {
    for (let item of store) {
        if (e.target.innerHTML == item.category) {
            products.innerHTML = null;
            characteristics.innerHTML = null;
            // тут додає у другий блок товари, після натискання на відповідну категорію
            for (let j = 0; j < item.products.length; j++) {
                let div = document.createElement("div");
                div.className = "prd";
                div.innerHTML += item.products[j].name;
                products.append(div);
                // Ще функція, для відстежування кліка вже по товару, визначає на який саме товар було натиснуто і виводить опис цього товару
                function showDecription(e) {
                    for (let item1 of item.products) {
                        if (e.target.innerHTML == item1.name) {
                            characteristics.innerHTML = null;
                            {
                                let p = document.createElement("p");
                                characteristics.append(p);
                                p.innerHTML += item1.description
                                characteristics.append(buy);
                            }
                        }
                    }
                }
                // Це сам відстежувач кліка по товару
                let allProducts = document.querySelectorAll(".prd")
                for (let item of allProducts) {
                    item.addEventListener("click", showDecription)
                }
            }
        }
    }

}




