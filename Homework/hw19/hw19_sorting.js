/*
 HW_19_TEXT
Задайте массив целых чисел, например [1 5 2 9 4]
1.Реализуйте алгоритм простой сортировки пузырьком от меньщего к большему.
2.*** Для отсорторированного массива реализуйте метод бинарного поиска,
если число в массиве есть , то верните индекс, а если нет, то верните -1
*/

const array = [1, 5, 2, 9, 4];

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort(array));

console.log("---2. Метод бинарного поиска");
// ВАЖНО! Метод работает только с отсортированными массивами
// При каждой итерации смотрим на середину текущего диапазона

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (array[middle] === target) {
      return middle;
    }
    if (array[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

const sortedArray = [
  1, 3, 4, 6, 7, 8, 10, 13, 14, 18, 19, 21, 24, 37, 40, 45, 71,
];
console.log(binarySearch(sortedArray, 7));
console.log(binarySearch(20));
