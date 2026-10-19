class Animal {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log(`${this.name} is walking`);
    }
}

const animal = new Animal("Rex");
animal.walk(); // -> Rex is walking

class Dog extends Animal {
    bark() {
        console.log(`${this.name} said Woof!`);
    }
}

const dog = new Dog("Fido");
console.log(dog);
dog.walk();
dog.bark();


class Dog2 extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
}

const dog2 = new Dog2("Archie", "Labrador");
console.log(dog2.breed);
console.log(dog2.name);


class Animal2 {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes sound`);
    }
}

class Dog3 extends Animal2 {
    speak() {
        console.log(`${this.name} BARKS`);
    }
}

const animal2 = new Animal2("Rex");
const dog3 = new Dog3("Cheddar");

animal2.speak(); // -> Rex makes sound
dog3.speak(); // -> Cheddar BARKS
