let array = [1, 2, 3, 4, 5];
console.log(array[0]);
console.log(array);

array = ["a", "b", "c", "d", "e"];
console.log(array[0]);
console.log(array);

array = [1, 2, 3, "b", "g", false];
console.log(array[0]);
console.log(array);

const fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);
console.log(fruits);

fruits[1] = "grape";
console.log(fruits);

console.log("-----------------------------");

// Добавление данных в конец массива
fruits.push("kiwi");
console.log(fruits);

// Добавление данных в начало массива
fruits.unshift("mango");
console.log(fruits);

// Удаление последнего элемента
fruits.pop();
console.log(fruits);

// Удаление первого элемента
fruits.shift();
console.log(fruits);

fruits.push("pear", "watermelon");
console.log(fruits);

fruits.unshift("banana", "strawberry");
console.log(fruits);

const myFruits = ["tomato", "cucumber"];
fruits.push(myFruits);
console.log(fruits);

fruits.pop(...myFruits);

fruits.push(...myFruits);
console.log(fruits);

console.log("-------------------------");

// SPLICE
fruits.splice(1, 2, "tomato", "cucumber");
console.log(fruits);
