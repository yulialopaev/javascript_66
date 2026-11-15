function test() {
    const message = 'Hello';
    console.log(message);
}

test();

// console.log(message);


function outer() {
    const message = 'Hello, Inner';

    function inner() {
        console.log(message);
    }

    inner();
}

outer();

function outer2() {
    const message = 'Hello, Outer2';
    function inner2() {
        console.log(message);
    }
    return inner2;
}

const savedFunction = outer2(); // inner2 function
savedFunction(); // -> вызываем inner2 -> 'Hello, Outer2'


function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const counter = createCounter(); // -> function
console.log(counter()); // -> 1
console.log(counter()); // -> 2
console.log(counter()); // -> 3

const counterA = createCounter();
const counterB = createCounter();

console.log(counterA()); // -> 1
console.log(counterA()); // -> 2
console.log(counterA()); // -> 3

console.log(counterB()); // -> 1
console.log(counterB()); // -> 2
console.log(counterB()); // -> 3

console.log(counterA()); // -> 4
