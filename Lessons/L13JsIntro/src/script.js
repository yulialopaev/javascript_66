console.log("Hello, World!");

let x = 3.14159;
console.log(x);  // 3.14159

let y;
console.log(y); // undefined

const z = 2.5;
console.log(z); // 2.5

// z = 5.0 -> error (const)

x = "Hello";
console.log(x);
console.log(typeof (x)); // string
console.log(typeof (z)); // number

console.log(typeof (y)); // undefined

y = x;
console.log(y); // Hello
console.log(typeof (y)); // string

console.log('y = ' + y); // y = Hello
console.log(`y = ${y}`) // y = Hello

// ''  ""  ``  $  {}
let pi = 3.14159;
a = `pi = ${pi}`
console.log(a); // pi = 3.14159

let res = 7 / 3;
console.log(res); // 2.3333333333333335

res = 7 % 5;
console.log(res); // 2

console.log(`res = ${10 % 3}`); // res = 1

res = 5 + 7;
console.log(res);

res = "5" + "7";
console.log(res); // 57 (string)

res = 7 + "UP";
console.log(res); // 7UP (string)

x = null;
console.log(x + " " + typeof (x)); // null object

x = undefined;
console.log(x + " " + typeof (x)); // undefined undefined

res = null - 5;
console.log(res); // -5

res = true + 5;
console.log(res); // 6

res = false * 5;
console.log(res); // 0

res = "hello" * 5;
console.log(res); // NaN

res = "hello" + 5;
console.log(res); // hello5

res = "22.5" * 5;
console.log(res); // 112.5

res = "23.0" + 5;
console.log(res); // 23.05 (string)

res = "6" - 5;
console.log(res); // 1

res = 5 / null;
console.log(res); // Infinity

res = -5 / null;
console.log(res); // -Infinity

res = 5 / undefined;
console.log(res); // NaN

res = 5/0;
console.log(res); // Infinity

res = 0/0;
console.log(res); // NaN

res = null / null;
console.log(res); // NaN

res = "" / 0;
console.log(res); // NaN

res = false / undefined;
console.log(res); // NaN -> 0/0

