/*
HW_18_TEXT
 
1.Напишите четыре функции для основных математических действий + - * /
2.Напишите функцию калькулятор, принимающую при вызове два числа
и функцию операции над этими числами и возвращающую результат вычислений
3.Попробуйте написать все эти функции через function-declaration.
4.Попробуйте написать все эти функции через  function-expression.
5.***
Попробуйте написать все эти функции черед стрелочный синтаксис
    который имеет свою специфику и подходит не всегда.
 */

console.log("------ Function-declaration ------");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function calculator(a, b, sign) {
  if (sign === "+") {
    return add(a, b);
  }
  if (sign === "-") {
    return subtract(a, b);
  }
  if (sign === "*") {
    return multiply(a, b);
  }
  if (sign === "/") {
    return divide(a, b);
  }
}

console.log(calculator(3, 6, "+"));
console.log(calculator(13, 8, "-"));
console.log(calculator(10, 3, "*"));
console.log(calculator(66, 11, "/"));

console.log("------ Function-expression ------");
const add2 = function (a, b) {
  return a + b;
};

const subtract2 = function (a, b) {
  return a - b;
};

const multiply2 = function (a, b) {
  return a * b;
};

const divide2 = function (a, b) {
  return a / b;
};

const calculator2 = function (a, b, sign) {
  if (sign === "+") return add2(a, b);
  if (sign === "-") return subtract2(a, b);
  if (sign === "*") return multiply2(a, b);
  if (sign === "/") return divide2(a, b);
};

console.log(calculator2(3, 6, "+"));
console.log(calculator2(13, 8, "-"));
console.log(calculator2(10, 3, "*"));
console.log(calculator2(66, 11, "/"));

console.log("------ Arrow function ------");

const add3 = (a, b) => a + b;
const subtract3 = (a, b) => a - b;
const multiply3 = (a, b) => a * b;
const divide3 = (a, b) => a / b;

const calculator3 = (a, b, sign) => {
  if (sign === "+") return add3(a, b);
  if (sign === "-") return subtract3(a, b);
  if (sign === "*") return multiply3(a, b);
  if (sign === "/") return divide3(a, b);
};

console.log(calculator3(3, 6, "+"));
console.log(calculator3(13, 8, "-"));
console.log(calculator3(10, 3, "*"));
console.log(calculator3(66, 11, "/"));
