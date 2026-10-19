const numbers = [1, 5, 2, 9, 4];
let result = numbers.map((n) => n * 10);

console.log(result);

const elementPow2 = function (e) {
  return e * e;
};

result = numbers.map(elementPow2);
console.log(result);

const fruits = ["banana", "apple", "orange", "mango", "pineapple"];
console.log(fruits);
const result2 = fruits.map((fruit) => fruit.length);
console.log(result2);
