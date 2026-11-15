{
    let age = 28
    console.log(age)
}

// console.log(age) -> ReferenceError: age is not defined

{
    var b = 28;
}

console.log(b);

function test() {
    var message = "Hello"
}

test();
// console.log(message); -> ReferenceError: message is not defined

var number = 20;
var number = 30;

console.log(number);

let number1 = 22;
// let number1 = 33;

console.log(a); // -> undefined
var a = 10;

console.log(b);
// let b = 10; -> SyntaxError: Identifier 'b' has already been declared

const user = {
    name: "Anna",
    age: 30
}

user.name = "Sara"
console.log(user.name) // -> Sara

// user = 123; -> Error

console.log("====== VAR and LET in loops ======")
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 100);
}

for (let j = 0; j < 5; j++) {
    setTimeout(() => {
        console.log(j);
    }, 100);
}