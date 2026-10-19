const numbers = [1, 5, 2, 9, 4];

// acc - accumulator, n - current element, 0 - initial value
const sum = numbers.reduce((acc, currentValue) => acc + currentValue, 0);
console.log("Sum all array elements ", sum); // -> 21

const multiply = numbers.reduce((acc, currentValue) => acc * currentValue, 1);
console.log("Multiply all array elements ", multiply); // -> 360

// Если не указать начальное значение, то по умолчанию acc = first element
const mult = numbers.reduce((acc, currentValue) => acc * currentValue);
console.log("Multiply all array elements without initial value ", mult); // -> 360

const concat = numbers.reduce((acc, currentValue) => acc + currentValue, "");
console.log("Concatenate all array elements ", concat); // -> "15294"

const avgResult = numbers.reduce((acc, currentValue) => acc + currentValue, 0) / numbers.length;
console.log("Average of all array elements ", avgResult); // -> 4.2