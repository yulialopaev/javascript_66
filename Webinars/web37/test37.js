const name = "External name";

const user = {
    name: "John",
    showName () {
        console.log(name);
        console.log(this.name);
    }
}

user.showName();

function createGreeting (name) {
    function greet() {
        console.log(`Hello: ${name}`)
    }

    return greet;
}

const greetAnna = createGreeting("Anna");
greetAnna();

const greetJohn = createGreeting("John");
greetJohn();

function createCounter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    }
}

const counter = createCounter();
counter();
counter();
counter();

const count = createCounter();
count();
count();
count();


function createUserManager() {
    const users = [];
    return {
        addUser(user) {
            users.push(user);
        },
        getUsers() {
            return [...users];
        }
    }
}

const firstManager = createUserManager();
const secondManager = createUserManager();

firstManager.addUser("John");
secondManager.addUser("Otto");

console.log(firstManager.getUsers());
console.log(secondManager.getUsers());


const user1 = {
    name: "John",
    showName() {
        console.log(this.name);
    }
};

user.showName();

const show = user.showName;
// show();

const anotherUser = {
    name: "Otto",
    showName: user.showName
}

anotherUser.showName();