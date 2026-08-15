// print 5 раз слово 'hello'
// python:
// for number in range(5)

for (let i = 0; i < 5; i++) {
  console.log("Hello");
}

let n = 5;
n = n + 2;
console.log(n); // -> 7

n += 2;
console.log(n); // -> 9

n++;
console.log(n); // -> 10

n--;
console.log(n); // -> 9

console.log(n++); // -> 9
console.log(n); // -> 10

console.log(n--); // -> 10
console.log(n); // -> 9

console.log(--n); // -> 8
console.log("-------------------------------------");

for (let j = 2; j < 2050; j *= 2) {
  console.log(j);
} 

// переменная j живет только в цикле
// console.log(j);  -> ReferenceError: j is not defined
