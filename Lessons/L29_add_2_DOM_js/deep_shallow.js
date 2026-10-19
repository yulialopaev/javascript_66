//

const productsFromList = [
    "Milk", "milk", "MILK", "Potato", "cucumber", "BUTTER", "butter", "BUTTER", "butter", ""
]

const p1 = productsFromList; // ссылка на тот же массив
console.log(p1 === productsFromList);

const p2 = [...productsFromList]; // неглубокая копия
console.log(p2 === productsFromList);

const productsFromListObj = [{
    name: "Milk",
    inFridge: true,
    inRecipe: false
}, {
    name: "Potato",
    inFridge: true,
    inRecipe: true
}, {
    name: "Cucumber",
    inFridge: true,
    inRecipe: false
}, {
    name: "Butter",
    inFridge: true,
    inRecipe: true
}]

const p2Obj = [...productsFromListObj];
console.log(p2Obj)

const productsMap = new Map();
productsMap.set("Milk", {
    name: "Milk",
    inFridge: true,
    inRecipe: false
})

// [{number}, string, number, {{}, {}, {}}]
// Рекурсия:
// Бери элемент - если примитив - копируй и бери следующий
// если нет - проваливайся внутрь