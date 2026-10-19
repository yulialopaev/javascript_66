// number
let a = 3.14159;
let res = Math.floor(a);

console.log(res); //-> 3

a = -3.9999;
res = Math.floor(a);
console.log(res);

a = 1.77;
res = Math.round(a);
console.log(res); // -> 2

a = 1.11;
res = Math.round(a);
console.log(res); // -> 1

a = -1.77;
res = Math.round(a);
console.log(res); // -> -2

a = -1.11;
res = Math.round(a);
console.log(res); // -> -1

res = Math.PI;
console.log(res);

console.log(Math.random()); // -> [0,1]

a = 1.77;
res = Math.trunc(a);
console.log(res); // -> 1

a = 1.11;
res = Math.trunc(a);
console.log(res); // -> 1

res = Math.PI;
res = res.toFixed(2);
console.log(res, typeof res);
res = +res;
console.log(res, typeof res);

console.log("----------------------------");

const str = "Hello, JavaScript!";
console.log(str.length);
res = str.charAt(4);
console.log(res); // -> o

res = str[16];
console.log(res);

for (s of str) {
  console.log(s);
}

res = str.indexOf("ava");
console.log(res);

res = str.lastIndexOf("l");
console.log(res);

res = str.substring(4,8) // [4...8]
console.log(res); // -> "o, J"

res = str.slice(4,12) // [4...12]
console.log(res); // -> "o, JavaS"