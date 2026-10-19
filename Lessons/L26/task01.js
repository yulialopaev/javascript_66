const products = [
 {name: "Молоко", count: 2.0, price: 1.5, expDate: "2024-07-01"},
 {name: "Хлеб", count: 0.5, price: 0.8, expDate: "2024-06-15"},
 {name: "Яйца", count: 12, price: 2.5, expDate: "2024-07-10"},
];

console.log("------Содержимое холодильника-----_")
console.log(products)

const p1 = {name: "Сыр", count: 0.3, price: 1.0, expDate: "2024-07-01"};
products.push(p1);

console.log("------Содержимое холодильника после добавления продукта------")
console.log(products);

console.log("------Содержимое в виде JSON------")
const res = JSON.stringify(products, null, 2);
console.log(res);

console.log("------Снова в виде объекта------")
const res2 = JSON.parse(res);
console.log(res2);