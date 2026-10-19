const products = ["Milk", "Eggs"];
products.push("Meat");

console.log(products)

console.log(Object.hasOwn(products, "push")); // -> false
// метод push не принадлежит массиву products. Он принадлежит прототипу Array.prototype
console.log(Object.hasOwn(Array.prototype, "push")); // true

console.log(Object.getPrototypeOf(products) === Array.prototype);

// Chain of prototypes: products -> Array.prototype -> Object.prototype (у объекта нет прототипа)


const animal = {
    eats: true,
    sleep() {
        console.log("The animal is sleeping")
    }
};

const dog = Object.create(animal);
// создали объект dog, который наследует свойства и методы от объекта animal
// добавим свойство name
dog.name = "Bobik";
console.log(dog.name);
console.log(dog.eats);
dog.sleep();

console.log(Object.hasOwn(dog, "name"));
console.log(Object.hasOwn(dog, "eats")); // false. Свойство принадлежит не принадлежит объекту dog
console.log(Object.hasOwn(dog, "sleep"));

console.log(Object.getPrototypeOf(dog) === animal);

animal.eats = false;
console.log(dog.eats);

dog.eats = true; // у собаки создали собственное свойство eats
console.log(dog.eats);
console.log(animal.eats);
console.log(Object.hasOwn(dog, "eats")); // -> true