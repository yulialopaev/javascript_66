// hw17text
/*
1. Напишите программу,
которая проверяет и печатает вердикт ,
является ли целое положительное
число любой длины счастливым попозиционно!
ЕСЛИ  Сумма цифр на четных позициях равна
сумме цифр на нечетных позициях - число счастливое,
ИНАЧЕ нет.
1210 - 1+1 = 2+0 счастливое
135 - 1+5 != 3 не счастливое
 
*/

const number = 1210;
let tempNumber = number;
let sum1 = 0;
let sum2 = 0;

while (tempNumber > 0) {
  let digit = tempNumber % 10;
  sum1 += digit;
  tempNumber = Math.floor(tempNumber / 10);

  digit = tempNumber % 10;
  sum2 += digit;
  tempNumber = Math.floor(tempNumber / 10);
}

if (sum1 === sum2) {
  console.log(`${number} is a lucky number`);
} else {
  console.log(`${number} is not a lucky number`);
}

console.log("1-------from Ilya--------");

// let sum1 = 0;
// let sum2 = 0;
let position = 1;
let num = 1234;
let numTemp = num;

while (num != 0) {
  if (position % 2 === 0) {
    sum1 += num % 10;
  } else {
    sum2 += num % 10;
  }
  num = (num - (num % 10)) / 10;
  position++;
}

if (sum1 === sum2) {
  console.log(`${numTemp} is a lucky number`);
} else {
  console.log(`${numTemp} is not a lucky number`);
}

console.log(" ");
console.log("2-------from Ilya--------");

num = 3234;
numTemp = num;
sum1 = 0;
sum2 = 0;
while (num) {
  sum1 += num % 10;
  num = (num - (num % 10)) / 10;
  sum2 += num % 10;
  num = (num - (num % 10)) / 10;
}

if (sum1 === sum2) {
  console.log(`${numTemp} is a lucky number`);
} else {
  console.log(`${numTemp} is not a lucky number`);
}

console.log(" ");
console.log("3-------from Ilya--------");
num = 12341568;
numTemp = num;
let sum = 0;
while (num) {
  sum = (num % 10) - sum;
  num = (num - (num % 10)) / 10;
}

if (sum === 0) {
  console.log(`${numTemp} is a lucky number`);
} else {
  console.log(`${numTemp} is not a lucky number`);
}

/*
2. Напишите программу,
которая проверяет и печатает вердикт ,
является ли целое положительное
число  длины 6 цифр счастливым зеркално!
ЕСЛИ  Сумма перваых 3 цифр равна
сумме цифр на последних 3 позициях - число счастливое,
ИНАЧЕ нет.
123420 -1+2+3 = 2+0 счастливое
 
712004- 7+1+2 != 0+0+4 не счастливое
*/
console.log(" ");
const number2 = 712004;
let tempNumber2 = number2;
let sum3 = 0;
let sum4 = 0;

for (let i = 0; i < 6; i++) {
  while (i < 3) {
    let digit = tempNumber2 % 10;
    sum3 += digit;
    tempNumber2 = Math.floor(tempNumber2 / 10);
    i++;
  }

  while (i >= 3 && i < 6) {
    let digit = tempNumber2 % 10;
    sum4 += digit;
    tempNumber2 = Math.floor(tempNumber2 / 10);
    i++;
  }
}

if (sum3 === sum4) {
  console.log(`${number2} is a lucky number`);
} else {
  console.log(`${number2} is not a lucky number`);
}

console.log(" ");
console.log("4-------from Ilya--------");

num = 627456;
numTemp = num;
sum = 0;

let firstHalf = (num - (num % 1000)) / 1000;
let lastHalf = num % 1000;

for (let i = 1; i <= 3; i++) {
  sum = sum + (firstHalf % 10) - (lastHalf % 10);
  lastHalf = (lastHalf - (lastHalf % 10)) / 10;
  firstHalf = (firstHalf - (firstHalf % 10)) / 10;
}
if (sum === 0) {
  console.log(`${numTemp} is a lucky number`);
} else {
  console.log(`${numTemp} is not a lucky number`);
}


console.log(" ");
console.log("5-------from Ilya--------");
num = 627456;
numTemp = num;
sum = 0;

let firstHalf = (num - (num % 1000)) / 1000;
let lastHalf = num % 1000;