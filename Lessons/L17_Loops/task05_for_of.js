// for...of - arrays

const fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
    console.log(fruit);
    fruit = "kiwi";
}

console.log(fruits); // -> [ 'apple', 'banana', 'orange' ]
