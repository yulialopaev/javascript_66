const printArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 10;
    console.log(i, "->", arr[i]);
  }
};

const primes = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
printArray(primes);
console.log("Array after changing: ", primes);

const reverseArray2 = (arr) => {
  for (let i = 0; i < arr.length / 2; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
};
reverseArray2(primes);
console.log("Массив после переворота:", primes);
