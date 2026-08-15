let number = 2;

while (number < 2050) {
  console.log(number);
  number *= 2;
  let res = number % 2 === 0 ? "even" : "odd";
  console.log(res);
}

// переменная res живет только в цикле
// console.log(res);  -> ReferenceError: res is not defined

console.log("-------------------------------------");
