const operation = {
  add: (a, b) => a + b,
  substract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      return "Division by zero";
    }
    return a / b;
  },
};

console.log(operation);
console.log(operation.add);

console.log(operation.add(2, 4));
console.log(operation.divide(6, 3));
console.log(operation.divide(3, 0));

const operation2 = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => {
    if (b === 0) {
      return "Division by zero";
    }
    return a / b;
  },
};

console.log(operation2["+"](2, 4));
console.log(operation2["-"](6, 3));
console.log(operation2["/"](3, 0));

// function math (firstNumber) {
//
// }
// const calc = math(10)
// calc.plus(5) => 15

console.log("--------------------------");

function math(firstNumber) {
  return {
    add: (b) => firstNumber + b,
    substract: (b) => firstNumber - b,
    multiply: (b) => firstNumber * b,
    divide: (b) => (b === 0 ? "You can not divide by zero" : firstNumber / b),
  };
}

const calc = math(10);

console.log(calc.add(5));
console.log(calc.substract(5));
console.log(calc.multiply(5));
console.log(calc.divide(5));
console.log(calc.divide(0));

// console.log(calc.plus(5))
