/*
HW_21-22_TEXT
1.
 
a) Создайте несколько объектов-продуктов. В каждом объекте
должно быть поле name (название), description(описание), price(цена),
info (функция, которая формирует строку вида:
`товар: notebook lenovo thinkpad; цена: 1283 описание: cpu intel core7, ram:16gb ...`
*/

function info() {
  return `Товар: ${this.name}; цена: ${this.price} описание: ${this.description}`;
}

const product1 = {
  name: "bread",
  description: "white",
  price: 12,
  info: info,
};

const product2 = {
  name: "notebook",
  description: "cpu",
  price: 1283,
  info: info,
};

const product3 = {
  name: "jeans",
  description: "dark blue",
  price: 199,
  info: info,
};

console.log(product1.info());
console.log(product2.info());
console.log(product3.info());

/*
b) создайте конструктор для создания объектов-товаров.
Создайте несколько товаров
*/
console.log("--------------------------")

function Product(name, description, price) {
  this.name = name;
  this.description = description;
  this.price = price;
  this.info = info
  };


const product4 = new Product("milk", "tnuva", 12);
const product5 = new Product("window", "big", 326);
const product6 = new Product("Keyboard", "Logitech", 319);

console.log(product4);
console.log(product4.info());

console.log(product5);
console.log(product5.info());

/* 
с) Создайте массив из товаров. Напишите функцию, которая
выводит в консоль информацию о всех товарах в виде:
```
Tовар 1
    name: notebook lenovo thinkpad
    price: 1283
    description: .....
    info: ....
```  
т.е. `поле: значение` При этом: поля, которые являются
функциями, нужно выводить результат работы функции
(не текст функции)
 
*/
console.log("--------------------------")

const products = [product1, product2, product3, product4, product5, product6];
// console.log(products);

function printInfo(array) {
  array.forEach((product, i) => {
    console.log(`Товар ${i + 1}`);
    console.log(`name: ${product.name}`);
    console.log(`price: ${product.price}`);
    console.log(`description: ${product.description}`);
    console.log(`info: ${product.info()}`);
    console.log("+++");

  });
}

printInfo(products);

function printArray2(arr){
    if(!Array.isArray(arr)){
        console.log("неопознанный параметр");
        return;
    } else {
        arr.forEach((item, i) =>{
            console.log(`Товар ${i+1}`);
            for(let key in item){  
                let value = typeof(item[key])!=='function'? item[key]:item[key]();
                console.log(`   ${key}:${value}`)
            }
        })
 
    }
 
}

console.log("--------------------------")
printArray2(products);