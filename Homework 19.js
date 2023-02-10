"use strict"
function sayHello(Name) {
    if (arguments.length > 1) {
        let allNames = [];
        for (let item of arguments) {
            allNames.push(item);
        }
        return alert("Hello guys, " + allNames + "!");
    } else {
        return alert("Hello " + Name + "!");
    }

}
sayHello("Petro");
sayHello('Petro', 'Ivan', 'Olga');




















