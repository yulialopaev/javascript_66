console.log(sum(1, 2));
console.log(sum(1, 2, 3)); // -> 3 (тройка игнорируется)

const person = {
  name: "John",
};

function greet(someone) {
  someone["surname"] = "Smith";
}

greet(person); // -> функция без return - проводит действие над объектом и не возвращает ничего.
console.log(person);

function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Division by zero";
  }
  return a / b;
}

function calculate(a, b, operation) {
  if (typeof operation !== "function") {
    return "Operation must be a function";
  }
  return operation(a, b);
}

console.log(calculate(1, 2, "divide"));
console.log(calculate(1, 2, "add")); // ReferenceError
