// без объектов
let userName = 'Vasya';
let userAge = 21;
let isStudent = true;

console.log('Age: ' + userAge);


// с объектами
let user = {
    name: 'Ivan',
    age: 25,
    isStudent: true
};   

console.log(user); // { name: 'Ivan', age: 25, isStudent: true }
console.log(user.name); // 'Ivan'

user.age = 26;
console.log(user); // { name: 'Ivan', age: 26, isStudent: true }

user.email = 'ivan@test.com'
console.log(user); // { name: 'Ivan', age: 26, isStudent: true, email: 'ivan@test.com' }

delete user.isStudent;
console.log(user); // { name: 'Ivan', age: 26, email: 'ivan@test.com' }

const user1 = {
    name: 'Jack',
    age: 32
};

console.log(user1); // { name: 'Jack', age: 32 }

// user1 = 25; // Ошибка: Assignment to constant variable.
// console.log(user1);

// user1 = user; // Ошибка: Assignment to constant variable.
// Любая операция переприсваивания запрещена.

user1.age = 33;                    
console.log(user1); // { name: 'Jack', age: 33 }

user1.email = 'test@test.com';
console.log(user1); // { name: 'Jack', age: 33, email: 'test@test.com' }

console.log(typeof user1, typeof user1.name);