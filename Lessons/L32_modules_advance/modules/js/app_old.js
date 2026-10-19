function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

const result1 = add(2, 3);
const result2 = subtract(10, 5);
const result3 = multiply(2, 14);

console.log(result1);
console.log(result2);
console.log(result3);

const users = [
    {id: 1, name: 'John', age: 30},
    {id: 2, name: 'Jane', age: 17},
    {id: 3, name: 'Bob', age: 40}
]

function getAdults(users) {
    return users.filter(user => user.age >= 18);
}

console.log(getAdults(users));

const usersBox = document.querySelector('#usersBox');

function renderUsers(users) {
    users.forEach(user => {
        const p = document.createElement('p');
        p.textContent = `${user.name} is ${user.age} years old`;
        usersBox.append(p);
    })
}

renderUsers(users);