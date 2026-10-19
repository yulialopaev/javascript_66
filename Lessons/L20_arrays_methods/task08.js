const numbers = [56, 27, 91, 49, 38, 83, 12, 76, 46, 23, 44];
// Найти наибольшее четное, которое при этом не больше 50.
// Если такого числа нет, то вернуть null.

const biggestEven = 
  numbers
    .filter((num) => num % 2 === 0)
    .filter(num => num <= 50)
    .sort((a, b) => b - a)[0] | null;

// const biggestEven = filtered.length > 0 ? filtered[0] : null;

console.log("Biggest even number less than 50: ", biggestEven);
