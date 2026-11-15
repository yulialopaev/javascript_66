const createCounter = () => {
    let counter = 0;

    return function() {
        counter++;
        return counter;
    };
};

const counter = createCounter();
// console.log(counter()); // -> 1
// console.log(counter()); // -> 2
// console.log(counter()); // -> 3

const counterButton = document.querySelector('#counterButton');
const counterResult = document.querySelector('#counterResult');

counterButton.addEventListener("click", () => {
    const value = counter();
    counterResult.textContent = value.toString();
    console.log(`Counter: ${value}`);
});

const counterC = createCounter();
const counterD = createCounter();

console.log(counterC());
console.log(counterC())
console.log(counterD());