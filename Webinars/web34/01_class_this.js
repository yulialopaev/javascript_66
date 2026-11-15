class User {
    constructor(name, age) {
        this.name = name; // this.name - свойство создаваемого объекта, name - параметр, который
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const moshe = new User("Moshe", 40);
const shani = new User("Shani", 35);
moshe.sayHello();
shani.sayHello();

console.log(Object.hasOwn(moshe, "name"))
console.log(Object.hasOwn(User.prototype, "sayHello"))
console.log(moshe.sayHello === shani.sayHello)

const person = {
    name: 'John',
    sayName() {
        console.log(this.name);
    }
};

person.sayName();

const anotherPerson = {
    name: 'Alice',
    sayName: person.sayName,
};

anotherPerson.sayName();
console.log(person.sayName === anotherPerson.sayName);

const company = {
    name: "Google",
    employee: {
        name: "Moshe",
        sayName() {
            console.log(this.name);
        }
    }
}

company.employee.sayName();

const employee = company.employee;
employee.sayName();

function printThisName() {
    console.log(this.name);
}

const student = {
    name: "Rabindranat",
    printThisName
}
student.printThisName();

const sayName = person.sayName; // потеряли контекст
console.log(sayName === person.sayName); // -> true

// sayName();  -> Потеря контекста

const hello = shani.sayHello; // потеряли контекст

try {
    hello(); // -> вызов функции с потерянным контекстом
} catch (e) {
    console.log(e.message);
}

function executeCallback(callback) {
    callback();
}

const logger = {
    message: "Hello from logger",
    print() {
        console.log(this.message);
    }
}

logger.print();

try {
    executeCallback(logger.print);
} catch (e) {
    console.log(e.message);
}

console.log(executeCallback)




