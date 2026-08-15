let number1 = 5;
let number2 = 5;

let result = number1 === number2;
console.log(result); // true

result = number1 == number2;
console.log(result);

console.log("---------------------");
console.log("5" == 5); // true
console.log("5" === 5); // false

console.log("5" != 5); // false
console.log("5" !== 5); // true

console.log("------------------");

// < > <= >=
console.log(5 < 10); // true
console.log("1" <= 2); // false
console.log("11" <= 2); // false - лексикографическое сравнение  "11" ? "2" (один идет раньше 2)

console.log([] == ![]); // true
console.log([] === ![]); // false
