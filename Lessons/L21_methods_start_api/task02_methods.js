const arr = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "one",
  "two",
  "three",
  "four",
  "five",
];

console.log("----- IndexOf, LastIndexOf ------");
console.log(arr.indexOf("three"));
console.log(arr.lastIndexOf("three"));

console.log("----- includes ------");
console.log(arr.includes("three"));
console.log(arr.includes("eleven"));

console.log("----- find------");
console.log(arr.find((item) => item.toLowerCase() === "three"));
console.log(arr.findIndex((item) => item.toLowerCase() === "three"));
console.log(
  arr.find((element, index) => index % 2 === 1 && element.length > 4),
);

console.log("----- filter ------");
console.log(
  arr.filter((element, index) => index % 2 === 0 && element.length > 4),
);

console.log("----- objArray ------");
const persons = [
  { name: "John", age: 30 },
  { name: "Mary", age: 25 },
  { name: "Mike", age: 35 },
  { name: "Anna", age: 23 },
];

const person = { name: "John", age: 30 };
let res = persons.indexOf(person);
console.log(res); // -1

res = persons.findIndex((p) => p.name === person.name && p.age === person.age);
console.log(res); // 0

res = persons.find((p) => p.age > 32);
console.log(res); // { name: 'Mike', age: 35 }

res = persons.find((p) => p.age < 32);
console.log(res); // { name: 'John', age: 30 }

console.log("----- forEach ------");
persons.forEach((p) => console.log(`Name: ${p.name}, age: ${p.age}`));
res = persons.forEach((p, index) =>
  console.log(`${index + 1}: Name: ${p.name}, age: ${p.age}`),
);
console.log(res);
// forEach возвращает undefined

console.log("----- map ------");
const names = persons.map((p) => p.name.toUpperCase());
console.log(names);

res = persons.map((p, index) => `${index + 1}: Name: ${p.name}, age: ${p.age}`);
console.log(res);
// map возвращает новый массив

console.log("----- reduce ------");
res = arr.reduce((acc, item) => acc + item.length, 0) / arr.length;
console.log(res);
// reduce возвращает результат применения функции к элементам массива

res = arr.reduce((acc, item) => (acc += item + "-"), "concatenation: ");
console.log(res);

res = "concatenation: ";
for (let i = 0; i < arr.length; i++) {
  res += arr[i] + "_";
}
console.log(res);

// Максимальный возраст из массива persons
res = persons.reduce(
  (youngPerson, p) => youngPerson.age < p.age ? p : youngPerson),
  
console.log(res);
