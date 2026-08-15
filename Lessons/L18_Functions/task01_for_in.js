const user = {
  id: 7,
  name: "John",
  age: 25,
  isAdmin: true,
};

console.log(user);
console.log(user.age);
// console.log(user."isAdmin");

console.log(user["age"]);
console.log(user["isAdmin"]);

let myField = "isAdmin";
console.log(user[myField]);

console.log("-------------------");

for (let key in user) {
  console.log(user[key]);
}

console.log("-------------------");
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}
console.log("-------------------");
const fruits = ["apple", "banana", "kiwi"]; // -> apple, banana, kiwi
for (fruit of fruits) {
  console.log(fruit);
}
console.log("-------------------");
// for... in не используем для массивов!
for (fruit in fruits) {
  console.log(fruit); // -> 0, 1, 2
  console.log(fruits[fruit]); // -> apple, banana, kiwi
}