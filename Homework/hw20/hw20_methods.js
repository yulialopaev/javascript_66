// HW_20_TEXT

// 1.Создайте массив на 10 строк.
const strings = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
];

/* 2.Создайте функцию comparator(a,b), которая  принимает 2 строки  и возвращает 1 - 
если первое строка длиннее, -1 если вторая строка длиннее, 0 если равны.  
Используйте синтаксис function declaration, вызовите эту фкнкцию и напечатайте результат.
Напишите эту эе функцию используя Function Expression и Arrow Function  */

function comparatorDeclaration(a, b) {
  if (a.length > b.length) return 1;
  if (a.length < b.length) return -1;
  else return 0;
}

const result = comparatorDeclaration(strings[0], strings[5]);
console.log(result);

const comparatorExpression = function (a, b) {
  if (a.length > b.length) return 1;
  if (a.length < b.length) return -1;
  else return 0;
};

const result1 = comparatorExpression(strings[5], strings[8]);
console.log(result1);

const comparatorArrow = (a, b) => {
  if (a.length > b.length) return 1;
  if (a.length < b.length) return -1;
  else return 0;
};

const result2 = comparatorArrow(strings[5], strings[6]);
console.log(result2);

/* 3.Напишите функцию, которая принимает массив и функуию-компаратор, и возвращает самое большое значение в массиве. 
Вызовите эту функцию, передав ей массив строк, полученный в первой задаче и функцию, написанную во второй задаче.*/

function bigValue(array, comparator) {
  const sorted = array.sort(comparator)
  return sorted[sorted.length - 1]
}

const result3 = bigValue(strings, comparatorDeclaration)
console.log(result3);


