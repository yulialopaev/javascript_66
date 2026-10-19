async function returnUser(id) {
    const response =  await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const userData = await response.json();
    return userData;
}

let userId = 1;
let userData = await returnUser(userId);
console.log(userData); // Object

let userDataJson = JSON.stringify(userData, null, 2);
console.log(userDataJson); // String

// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/users

userId = 10;
userData = await returnUser(userId);
console.log(userData); // Object

userDataJson = JSON.stringify(userData, null, 2);
console.log(userDataJson); // String

const users = [];
for(let i = 1; i<=10; i++) {
    const userData = await returnUser(i);
    let myObj = {
        id: userData.id,
        name: userData.name,
        latitude: userData.address.geo.lat,
        longitude: userData.address.geo.lng
    }
    users.push(myObj);
}

console.log(users); // Array