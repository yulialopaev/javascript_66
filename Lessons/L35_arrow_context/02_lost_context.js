"use strict";

const user = {
    name: 'Jane',
    age: 30,
    showName() {
        console.log(`Username: ${this.name}`);
    }
}

user.showName() // -> Username: Jane

const show = user.showName;
// show() -> TypeError: Cannot read properties of undefined (reading 'name')

const user1 = {
    name: 'Alice',
    showName() {
        console.log(`Username: ${this.name}`);
    }
}

// Потеря контекста при передаче функции в качестве аргумента
setTimeout(user1.showName, 1000); // -> Username: undefined
// setTimeout(user1.showName(), 1000); // -> Error

// Solution 1 - arrow function
setTimeout(() => user1.showName(), 1000); // -> Username: Alice

// Solution 2 - bind()
const boundShowName = user.showName.bind(user);
boundShowName(); // -> Username: Jane

setTimeout(user.showName.bind(user), 2000); // -> Username: Jane

user.showName.bind(user1)();

// Solution 3 - call()
function introduce() {
    console.log(`My name is ${this.name}`)
}

const user2 = {
    name: 'Yulia'
}

introduce.call(user2); // -> My name is Yulia

function introducePro(city, country) {
    console.log(`My name is ${this.name}, I live in ${city}, ${country}`)
}

 introducePro.call(user2, 'Haifa', 'Israel');
introducePro.apply(user2, ['Haifa', 'Israel']);