"use strict";

const button = document.getElementById("demoButton");

// button.addEventListener("click", function () {
//     console.log(this); // -> <button id="demoButton">Click me</button>
//     console.log(this.textContent); // -> Click me
//     }
// )

// button.addEventListener("click", () => {
//     console.log(this);
//     }
// )

button.addEventListener("click", (event) => {
    console.log(event.currentTarget) // весь объект, на котором висит событие
    // <button id="demoButton"><span>Click me</span></button>
    console.log(event.target) // -> элемент, на котором произошло событие <span>Click me</span>
    }
)

// Arguments and arrows
function showArguments() {
    console.log(arguments)
}

showArguments(10, 20, 30, 40) // -> [Arguments] { '0': 10, '1': 20, '2': 30, '3': 40 }

// const showArgumentsArrow = () => {
//     console.log(arguments)
// }

// showArgumentsArrow(10, 20, 30, 40) -> Error


const showArgumentsArrow = (...args) => {
    console.log(args)
}

showArgumentsArrow(10, 20, 30, 40) // -> [10, 20, 30, 40]


function User(name){
    this.name = name
}

const user = new User("John")
console.log(user.name)
