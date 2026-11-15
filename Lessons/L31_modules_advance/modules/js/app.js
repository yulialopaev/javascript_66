import { users, getAdults } from './users.js';
import renderUsers from './ui.js';
import { usersBox } from './ui.js';

console.log("==============================")
console.log(users);
const adults = getAdults(users);
console.log(adults);
console.log("==============================")



renderUsers(adults, usersBox)

