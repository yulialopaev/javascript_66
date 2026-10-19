console.log("task 05 run");

const database = [];
let currentId = 0;


// 1, "Яблоко", 12.50
function saveProduct(title, price) {
    if (typeof title !== "string" || title.trim() === "") {
        throw new Error("Title must be a not empty string");
    }

    if (typeof price !== "number" || price <= 0) {
        throw new Error("Price must be a positive number");
    }

    database.push(({
        id: ++currentId,
        title: title,
        price
    }))
}
saveProduct("Яблоко", 12.50);
saveProduct("Апельсин", 10.00);
saveProduct("Груша", 8.75);
console.log(database)

try {
    saveProduct("Банан", -5.00);
}
catch (error) {
    console.error(error.message);
}

try {
    saveProduct("     ", 5.00);
}
catch (error) {
    console.error(error.message);
}
console.log(database)

console.log("task 05 end");