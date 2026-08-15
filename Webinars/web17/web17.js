const numbers = [5, -2, 0, 17, -8, 4, 0, 3];

// кол-во положительных
let count = 0;

for (number of numbers) {
  if (number > 0) {
    count++;
  }
}

console.log(count);

let positive = 0;
let negative = 0;
let zero = 0;

// кол-во положительных и отрицательных чисел
for (number of numbers) {
  if (number > 0) {
    positive++;
  } else if (number === 0) {
    zero++;
  } else {
    negative++;
  }
}

console.log(positive);
console.log(negative);

// сумма цен
const prices = [100, 200, 250, 50, 60];

let sum = 0;
for (price of prices) {
  sum += price;
}
console.log(sum);

// средняя цена
console.log(sum / prices.length);

// Максимальная температура и её индекс
const temperatures = [20, 25, 30, 45, 35, 26];

let max = temperatures[0];
let maxIndex = 0;
for (let index = 1; index < temperatures.length; index++) {
  if (temperatures[index] > max) {
    max = temperatures[index];
    maxIndex = index;
  }
}

console.log(max);
console.log(maxIndex);

// сколько раз в массиве появляется цифра от 0 до 9
const numbers1 = [
  1, 0, 2, 3, 4, 6, 8, 9, 0, 2, 7, 7, 8, 1, 0, 2, 3, 4, 6, 8, 9, 0, 2, 7, 7, 8, 8
];

const counts = Array(10).fill(0);

let mostFrequent = 0;
let maxNumber = 0;

for (number of numbers1) {
  counts[number]++;
  if (maxNumber < counts[number]) {
    maxNumber = counts[number];
    mostFrequent = number;
  }
}

console.log(counts);
console.log("Most Frequent: " + mostFrequent);
console.log(maxNumber);

