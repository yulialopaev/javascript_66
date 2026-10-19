  const products = [
    { name: "Молjffed", count: 2.0, price: 1.5, expDate: "2024-07-01" },
    { name: "Хлеб", count: -0.5, price: 0.8, expDate: "2024-06-15" },
    { name: "Яйца", count: 12, price: -2.5, expDate: "2024-07-10" },
    { name: "Сыр", count: 0.3, price: 3.0, expDate: "2024-07-20" },
  ];

function productList() {
  const products = [
    { name: "Молоко", count: 2.0, price: 1.5, expDate: "2024-07-01" },
    { name: "Хлеб", count: 0.5, price: 0.8, expDate: "2024-06-15" },
    { name: "Яйца", count: 12, price: 2.5, expDate: "2024-07-10" },
    { name: "Сыр", count: 0.3, price: 3.0, expDate: "2024-07-20" },
  ];
  return products;
}

console.log(productList());

// 1. Пустое название продукта
const product1 = {name: null, count: 2.0, price: 1.5, expDate: "2024-07-01"};

function printUpperCaseName(product) {
    console.log(product.name.trim().toUpperCase());
}

// printUpperCaseName(product1); -> TypeError: Cannot read properties of null (reading 'toUpperCase')


// 2. Обрезанное название продукта
const product2 = {name: "Сы", count: 2.0, price: 1.5, expDate: "2024-07-20"};
function getFirstThreeChars(product) {
    return product.name.trim().substring(0, 3); // верни первых 2 символа
}
console.log(getFirstThreeChars(product2)); // "Сы" -> неверный результат

// 3. Число вместо названия продукта
const product3 = {name: "Сы123@", count: 2.0, price: 1.5, expDate: "2024-07-01"};
// например, проблема при поиске или переводе на другой язык

// 4. Отрицательное число продукта
const product4 = {name: "Молоко", count: -2.0, price: 1.5, expDate: "2024-07-01"};
console.log(`Total price for ${product4.name}: ${product4.count * product4.price}`); // -3 -> неверный результат


// 5. Отрицательное число цены
const product5 = {name: "Пончик", count: 2.0, price: -20, expDate: "2024-07-01"};
console.log(`Total price for ${product5.name}: ${product5.count * product5.price}`); // -40 -> неверный результат

// 6. Некорректная дата (не существует месяц и день)
const product6 = {name: "Молоко", count: 2.0, price: 1.5, expDate: "2024-13-45"};
console.log(`Expiration date for ${product6.name}: ${new Date(product6.expDate)}`); // "Invalid Date" 


// 7. Некорректный формат даты (не YYYY-MM-DD - не ISO)
const product7 = {name: "Молоко", count: 2.0, price: 1.5, expDate: "25*05*2024"};
console.log(`Expiration date for ${product7.name}: ${new Date(product7.expDate)}`); // "Invalid Date"


function isProductValid(product) {
    const title = product.name
    const count = product.count
    const price = product.price
    const expDate = product.expDate

    if(!title) return false;

    if(title.length < 3) return false;

    if(!/^[А-Я][а-я]+$/.test(title)) return false; // в названии только русские маленькие или большие буквы

    if(count < 0) return false;

    if(price < 0) return false;

    return true;
}

console.log(isProductValid(product1)); // false
console.log(isProductValid(products[0])); // true

function filterProducts(products) {
return products.filter(p => isProductValid(p));
}

// Допустимые продукты
const validProducts = filterProducts(products);
console.log(validProducts); 