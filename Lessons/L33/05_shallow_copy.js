const user = {
    name: "Maria",
    address: {
        city: "New York",
        zip: 12345
    }
}

const userCopy = {...user};
console.log(userCopy); // -> { name: 'Maria', address: { city: 'New York', zip: 12345 } }
console.log(user === userCopy); // -> false

userCopy.address.zip = 99999;

console.log(user.address.zip); // -> 99999
console.log(userCopy.address.zip); // -> 99999

console.log(user.address === userCopy.address); // -> true