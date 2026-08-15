let number = 2222222;

do {
  console.log(number);
  number *= 2;
} while (number < 2050);

console.log("1---------Перебор элементов-----------------");
let fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("2---------Изменение элементов-----------");

for (let i = 0; i < fruits.length; i++) {
  fruits[i] = fruits[i] + "!";
  console.log(fruits[i]);
}

console.log("3---------С помощью while-----------");

let counter = 0

while (counter < fruits.length) {
    console.log(`${counter + 1}. ${fruits[counter]}`);
    counter++;
}
