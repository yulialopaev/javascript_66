function sayHello() {
  console.log("Hello!");
}

sayHello();
sayHello();
sayHello();

console.log("----------------------------");
for (let i = 0; i < 3; i++) {
  sayHello();
}

console.log("----------------------------");
greet("Ivan");
greet("Alex");

function greet(name) {
  console.log(`Hello, ${name}!`);
}

console.log("----------------------------");

const result = getSum(3, 5);
console.log(result);
console.log(getSum(22, 33));
console.log(getSum); // -> [Function: getSum]

function getSum(num1, num2) {
  return num1 + num2;
}

console.log("----------------------------");
const numbers = [1, 2, 3, 4, 5];
const cities = ["London", "Paris", "Madrid"];

function getLastElement(array) {
  return array[array.length - 1];
}

console.log(getLastElement(numbers));
console.log(getLastElement(cities));

console.log("----------------------------");

console.log(generateArray(5));
console.log(generateArray(15));

function generateArray(size) {
  const result = [];

  for (let i = 1; i <= size; i++) {
    result.push(i);
  }
  return result;
}

console.log("----------------------------");
function greeting(name = "Anonymus") {
  return `Hello, ${name}!`;
}

console.log(greeting());
console.log(greeting("Vasya"));

function greeting(name = "Anonymus") {
  return `Hello, ${name}!!!!!`;
}

console.log(greeting());
console.log(greeting("Vasya"));

console.log("----------------------------");
const greet1 = function greet1Func(name = "Anonymus") {
  return `Hello, ${name}!`;
};

console.log(greet1("Petya"));
console.log(typeof greet1);

const greet2 = function (name = "Unknown") {
  return `HELLO, ${name}`;
};

console.log(greet2("Kolya"));

console.log("----------------------------");
const greet3 = (name = "Lena") => {
  let abc = "ABC";
  return `Hello, ${name} ${abc}`;
};

console.log(greet3("Olya"));

const greet4 = name => `Hello, ${name}!!!!!`
console.log(greet4("Tolya"));

const greet5 = () => console.log("Hello, world");
greet5()
console.log(typeof greet5, greet5);
