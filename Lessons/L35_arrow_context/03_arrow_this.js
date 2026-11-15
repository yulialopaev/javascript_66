// Стрелочная функция использует this из внешней области видимости
"use strict";

const user = {
    name: "Robert",
    showName() {
        console.log(`Outer: ${this.name}`); // Outer: Robert

        function inner() {
            console.log(`Inner: ${this.name}`); // TypeError: Cannot read properties of undefined (reading 'name')
        }

        // inner();
    }
}

user.showName();


const user1 = {
    name: "Kelly",
    showName() {
        console.log(`Outer: ${this.name}`); // -> Outer: Kelly

        const inner = () => {
            console.log(`Inner: ${this.name}`); // -> Inner: Kelly
        }

        inner();
    }
}

user1.showName();


const user2 = {
    name: "John",
    showName: () => {
        console.log(this.name) // -> TypeError: Cannot read properties of undefined (reading 'name')
    }
}

// user2.showName();

const user3 = {
    name: "John",
    showName() {
        console.log(this.name)
    }
}
user3.showName();


const user4 = {
    name: "John",
    showName: function (){
        console.log(`I'm ${this.name}`) // -> John
    }
}
user4.showName();