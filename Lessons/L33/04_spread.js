function sum(a, b, c) {
    return a + b + c;
}

const numbers = [10, 20, 30];

console.log(sum(numbers[0], numbers[1], numbers[2])); // -> 60
console.log(sum(...numbers)); // -> 60

// Spread and Rest - Не одно и то же

function sum2(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}

const values = [1, 2, 3, 4, 5];

console.log(sum2(...values));
console.log(sum2(1, 2, 3, 4, 5));


const original = [1, 2, 3];
const copy = [4, ...original];

console.log(copy);
console.log(original === copy); // -> false

copy.push(5);
console.log(original); // -> [1, 2, 3]
console.log(copy); // -> [4, 1, 2, 3, 5]


const fruits = ['apple', 'banana', 'orange'];
const vegetables = ['carrot', 'potato', 'tomato'];

const food = [...fruits, ...vegetables];
console.log(food);

const food2 = ['bread', ...fruits, 'milk', ...vegetables];
console.log(food2);

console.log("======Spread and objects======");

const user = {
    name: "John",
    age: 30,
    city: "New York"
}

const newUser = user; // Неправильно. Так не копируем.
newUser.age = 31;

console.log(user);
console.log(newUser);

console.log(user === newUser) // -> true

const newUser1 = {...user};
newUser1.age = 50;
console.log(user.age); // -> 31
console.log(newUser1.age); // -> 50

const newUser2 = {...user, age: 99};
console.log(newUser2.age);


const updatedUser = {
    ...user,
    city: "London",
    zip: 123456
}

console.log(user); // -> { name: 'John', age: 30, city: 'New York' }
console.log(updatedUser); // -> { name: 'John', age: 31, city: 'London', zip: 123456 }


const contactData = {
    email: "john@example.com",
    phone: "123-456-7890"
}

const fullUser = {...user, ...contactData};

console.log(fullUser);
// -> { name: 'John', age: 31, city: 'London', zip: 123456, email: 'john@example.com', phone: '123-456-7890' }

