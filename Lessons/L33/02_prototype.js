const animal = {
    eats: true,

    walk() {
        console.log("Animal is walking")
    }
}

const dog = Object.create(animal);

dog.name = "Rex";

console.log(dog.name); // -> Rex
console.log(dog.eats); // -> true
dog.walk(); // -> Animal is walking

const cat = Object.create(animal);
cat.name = "Tom";
cat.walk(); // -> Animal is walking

console.log(Object.getPrototypeOf(cat) === animal);

console.log(Object.hasOwn(dog, "walk")); // -> false
console.log(typeof dog.walk) // -> function

dog.eats = false;
console.log(dog.eats); // -> false
console.log(cat.eats); // -> true

console.log(Object.getPrototypeOf(dog) === animal); // -> true

animal.eats = "qwerty";
console.log(">>>", dog.eats); // -> false
console.log(">>>", cat.eats); // -> qwerty