console.log("======Деструктуризация параметров функции")

function printUser({name, age, zip}) {
    console.log(name, age, zip);
}

const user1 = {
    name: "Alice",
    age: 30,
    city: "New York" // игнорируется
};

printUser(user1); // -> Alice 30

// function printUser1(user) {
//     const {name, age} = user;
//     console.log(name, age);
// }
//
// printUser1(user1); // -> Alice 30


