console.log(typeof null);
console.log(typeof null == typeof undefined);
console.log(0.1 * 10 == true); // true
console.log(0.1 * 3 == 0.3); // false

console.log("--------------------------");

const result = 0.2 + 0.1;
const expected = 0.3;
epsilon = 0.0000000001;

console.log(Math.abs(result - expected) < expected); // если значение меньше точности, то можно считать, что числа равны
console.log(Math.abs(result - expected) < Number.EPSILON);
console.log(Number.EPSILON);

console.log("-------Задачка---------");
// S, A
// ANANAS
console.log("A" + NaN + "A" + "S");

console.log("--------------------------");
if ("Hello") {
  console.log("Условие выполнено");
} else console.log("Условие НЕ выполнено");

// false, 0, -0, "", null, undefined, NaN -> falsy
// true, {}, [], " "

let balance;
balance = 0;

if (balance !== undefined) {
  console.log("Balance existed");
} else {
  console.log("Balance not found");
}

console.log("--------------------------");

const orderObject = {
  customer: {
    customer_id: "123",
    name: {
        firstName: "Joe",
        familyName: "Doe"
    },
    isVip: true,
  },
  product: {
    product_id: "3344",
    productName: "Monitor",
    priceInCents: 15000,
  },
  quantity: "2",
};

const orderJson = JSON.stringify(orderObject);
console.log(orderJson);

const order = JSON.parse(orderJson);
console.log(order);
