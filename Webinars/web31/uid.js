const book = {
    id: 1, // MUST HAVE!!!
    isbn: "2132141521",
    publisher: "CoolPublisher",
    author: "Author",
    title: "Name"
}

// const books = [book0, book1, book2... ]; -> book3, delete book1 -> index массива не может быть ID
let id = 0

const books = [
    {id: 1, isbn: "12343541351"},
    {id: 2, isbn: "123435499900"},
    {id: 3, isbn: "12348880300"}
];
id = 3;

function nextId() {
    id++
}

// Date.now()
const products = [];

for (let i = 0; i < 1000000; i++) {
    products.push({
        id: Date.now(),
        name: `Product ${i}`
    });
}

const ids = products.map(p => p.id);
const uniqueIds = new Set(ids);

console.log(ids.length);
console.log(uniqueIds.size);

// Math.random()
function generateId() {
    return Math.random().toString(36).slice(2);
}

console.log(generateId())
console.log(generateId())
console.log(generateId())

// Modern solution
const realId = crypto.randomUUID()
console.log(realId)

// 1. Generate UUID -> 2. check UUID (что его нет) -> 3. use it

// UUID version 1 -> time & identification number
// UUID version 3 -> hash
// UUID version 4 -> crypto.randomUUID()
// UUID version 7 -> timestamp + random data