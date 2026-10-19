// Classic fabric function
function createAccount(name, price) {
  return {
    name,
    price,
    info() {
      return `${this.name}: ${this.price}`;
    },
  };
}

const product1 = createAccount("Laptop", "1000");
const product2 = createAccount("Robot", "2000");
console.log(product1);
console.log(product2);
console.log(product1.info());

// Constructor function
function Product(name, price) {
  this.name = name;
  this.price = price;
  this.info = function () {
    return `${this.name}: ${this.price}`;
  };
}

const product3 = new Product("TV", "800");
const product4 = new Product("Mouse", "200");
console.log(product3);
console.log(product4);

const product5 = {
  name: "Laptop",
  price: 1000,
  info() {
    console.log(this === product5);
  },
};

product5.info();

const notebook = {
  name: "Notebook",
  price: 1000,
  info() {
    return this.name;
  },
};

console.log(notebook);

const mouse = {
  name: "Mouse",
  info: notebook.info,
}

console.log(notebook.info());
console.log(mouse);
console.log(mouse.info());

const protoProduct = Product.prototype;
console.log(protoProduct);
product3.color = "black";

const protoProduct3 = Object.getPrototypeOf(product3);
console.log(protoProduct3 === protoProduct);

const protoProduct4 = Object.getPrototypeOf(product4);
console.log(protoProduct4 === protoProduct3);