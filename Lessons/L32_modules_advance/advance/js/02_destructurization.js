const user = {
    name: "John",
    age: 30,
    city: "New York",
}

// const name = user.name;
// const age = user.age;
// const city = user.city;
//
// console.log(name, age, city);

// const{name, age, city} = user;
// console.log(name, age, city);

// const{city, name} = user;
// console.log(name, city);

// const{city, name: userName} = user;
// console.log(userName, city);

// const{city = "Unknown", name: userName} = user;
// console.log(userName, city);

// const user1 = {
//     name: "Alice",
// }
//
// const{city = "Unknown", name: userName} = user1;
// console.log(userName, city); // Alice, unknown

const user1 = {
    name: "Alice",
    city: null
}

// const{city = "Unknown", name: userName} = user1;
// console.log(userName, city); // Alice, null

console.log("=======Вложенная деструктуризация======")

const user2 = {
    name: "Bob",
    address: {
        city: "London",
        street: "123 Main St",
        zip: "12345",
    }
}

console.log(user2.name, user2.address.city) // Bob London

const {address: {city, street, zip}, name} = user2
console.log(name, city, street, zip)

console.log("=======Деструктуризация массивов======")

const colors = ["red", "green", "blue"];
// const first = colors[0];
// const second = colors[1];

// const [first, second] = colors;
const [first, , third] = colors;
console.log(first, third)


console.log("=======SWAP======")
let a = 10;
let b = 20;
console.log(a, b);
//
// const temp = a;
// a = b;
// b = temp;
// console.log(a, b)

[a, b] = [b, a];
console.log(a, b);
