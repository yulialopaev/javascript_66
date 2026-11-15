import { add, subtract, multiply } from './math.js';
import { users } from './users.js';
import {usersBox} from "./ui.js";


const result = add(10, 5);
console.log(result);
console.log(subtract(10, 5))
console.log(multiply(10, 16))

function getAdults(users) {
    return users.filter(user => user.age >= 18);
}
console.log(getAdults(users));


function renderUsers(users) {
    users.forEach(user => {
        const p = document.createElement('p');
        p.textContent = `${user.name} is ${user.age} years old`;
        usersBox.append(p);
    })
}

renderUsers(users);

