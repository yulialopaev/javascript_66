function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('John'));

const greeting = (name) => {
    return `Hello, ${name}!`;
}

console.log(greeting('Yulia'));

const sayHello = () => console.log('Hello!');

sayHello();

// Variant 1
const square = (number) => number * number;

// Variant 2 - без скобок (только если один параметр)
const square1 = number => number * number;

const sum = (a, b) => a + b;

console.log(square(5));
console.log(square1(10));
console.log(sum(1, 2));

const createUser = (name, age) => {
    return {
        name: name,
        age: age
    };
};

const createUser1 = (name, age) => (
    {
        name: name,
        age: age
    }
);

const createUser2 = (name, age) => (
    {
        name,
        age
    }
);


const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(number => number * 2)

console.log(doubled)

const ages = [18, 16, 25, 5, 35] // -> [ 18, 25, 35 ]

const adults = ages.filter(age => age >= 18)
console.log(adults)

const names = ["Anna", "David", "Sarah"]

names.forEach(name => console.log(name))

const users = [
    {name: "Anna", age: 28},
    {name: "David", age: 32},
    {name: "Sarah", age: 15}
]

const adults1 = users.filter(({age}) => age >= 18)
console.log(adults1) // -> [ { name: 'Anna', age: 28 }, { name: 'David', age: 32 } ]
