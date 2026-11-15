"use strict";

console.log("Context Demo application started");

//1. Получаем HTML элементы
const nameInput = document.querySelector("#userName");
const showNowButton = document.querySelector("#showNow");
const showBrokenButton = document.querySelector("#showBroken");
const showArrowButton = document.querySelector("#showArrow");
const showBindButton = document.querySelector("#showBind");

const result = document.querySelector("#result");

//2. Создаём объект пользователя
const user = {
    name: "Anna",
    showName() {
        console.log(`This: ${this}`);
        const message = `Hello, ${this.name}!`;
        result.textContent = message;
        return message;
    }
};


//3. Обновляем имя пользователя
function updateUserName() {
    const name = nameInput.value.trim();
    user.name = name || "Guest";
}

//4. Кнопка Show Now
showNowButton.addEventListener("click", () => {
    updateUserName();
    user.showName();
});

//5. Кнопка Show Later (Broken)
showBrokenButton.addEventListener("click", () => {
    updateUserName();
    console.log(user)
    result.textContent = "Waiting 1 second (broken context)...";

    setTimeout(user.showName, 1000);
});


//6. Кнопка Show Later (Arrow)
showArrowButton.addEventListener("click", () => {
    updateUserName();
    result.textContent = "Waiting 1 second (arrow solution)...";

    setTimeout(() => user.showName(), 1000);
});

//7. Кнопка Show Later (Bind)
showBindButton.addEventListener("click", () => {
    updateUserName();
    result.textContent = "Waiting 1 second (bind solution)...";

    const boundShowName = user.showName.bind(user);

    setTimeout(boundShowName, 1000);
});

console.log("------ Tests simple ------")

const user1 = {
    name: "Anna",
    greet() {
        console.log(`Hello, ${this.name}!`)
    }
};

user1.greet();

const user2 = {
    name: "Bob",
    greet() {
        console.log(`Hello, ${this.name}!`)
    }
}

const fn = user2.greet
// fn();

const user3 = {
    name: "John",
    greet() {
        const inner = () => {
            console.log(`Hello, ${this.name}!`)
        }
        inner()
    }
};

user3.greet();

const user4 = {
    name: "Alice",
    greet: () => {
        console.log(`Hello, ${this.name}!`)
    }
};

user4.greet()