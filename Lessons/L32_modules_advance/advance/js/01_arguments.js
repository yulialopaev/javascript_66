function greeting(name) {
    // name - параметр функции
    console.log(`Hello ${name}`);
}

greeting("Anna");

// Anna - аргумент функции

function calculatePrice(price, quantity) {
    // price, quantity - параметры функции
    return price * quantity;
}

console.log(calculatePrice(100, 3));
// 10, 3 - аргументы функции
// в момент вызова функции аргументы передаются параметрам

function subtract(a, b) {
    return a - b;
};

console.log(subtract(10, 5)); // 5
console.log(subtract(5, 10)); // -5

function showUser(name, age) {
    console.log(`Hello, ${name}`);
    console.log(`You are ${age} years old`);
}

showUser("Anna"); // Не передали второй аргумент. You are undefined years old.
showUser("Vasya", 25, "Haifa"); // Передали три аргумента вместо двух. Лишние аргументы игнорируются.

function greet(name = "Guest") {
    console.log(`Hello, ${name}`);
}

greet("Anna");
greet(); // Guest
greet(undefined); // Guest
greet(null); // null
greet(""); // пустая строка

console.log("=========================================")

function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum(5)); // [5] -> 5
console.log(sum(1, 2, 3)); // [1, 2, 3] -> 6
console.log(sum(1, 2, 3, 4, 5, 6, 7)); // [1, 2, 3, 4, 5, 6, 7] -> 28

function showProducts(category, ...products) {
    console.log(`Category: ${category}`);
    console.log(products);
}

showProducts("Electronics", "Laptop", "Smartphone", "Tablet");
showProducts("Clothing", "T-shirt", "Jeans", "Sneakers", "Dress");

function showArguments(a, b) {
    console.log(arguments);
    console.log(arguments.length);
}

showArguments(1, 2, 3, 4, 5, 6, 7) // [1, 2, 3, 4, 5, 6, 7] -> 7
// псевдомассив arguments


function test1(a=5, ...rest) {
    console.log(a)
    console.log(rest)
}

test1(undefined, 10, 20)