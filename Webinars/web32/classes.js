function User(name, age) {
    this.name = name;
    this.age = age;
}

const anna = new User("Anna", 25);
const david = new User("David", 30);

console.log(david);
console.log(anna);

const user = new User("Ivan", 23);
console.log(user);

User.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`)
}

anna.sayHello();
david.sayHello();

//Chain prototypes david -> User.prototype -> Object.prototype


console.log("\n=========CLASS========\n")

class Person {
    constructor(name, age) {
        this.name = name; // this.name - свойство создаваемого объекта, name - параметр, который
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const moshe = new Person("Moshe", 40);
const shani = new Person("Shani", 35);
moshe.sayHello();
shani.sayHello();

console.log(Object.hasOwn(moshe, "name"))
console.log(Object.hasOwn(shani, "sayHello"))