"use strict"
const declaredVariable;
const someData = 99;
const obj = { age: 33 };

typeof 37; // number
typeof obj; // object
typeof true; // boolean
typeof 3.14; // number
typeof obj.name // undefined
typeof 42; // number
typeof ""; // string
typeof "bla"; // string
typeof Boolean(1); // boolean
typeof !!1; // boolean
typeof obj.age; // number
typeof Infinity; // number
typeof NaN; // number 
typeof (someData + " Wisen"); // string;
typeof Number("1"); // number
typeof Number("shoe"); // NaN, хоча NaN також є number 
typeof `template literal`; // string
typeof "1"; // string
typeof typeof 1; // number;
typeof false; // boolean
typeof String(1); // string;
typeof undefined; // undefiend
typeof { a: 1 }; // object
typeof declaredVariable; // undefined;
typeof [1, 2, 4]; // object
typeof null; // null
typeof "John"; // string
typeof [] + '1'; // object, але можливо пустий масив це буде 0, тоді вийде string через конкатинацію.
typeof (1 + '1'); // string
typeof (10 * '2'); // number
















