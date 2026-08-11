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
