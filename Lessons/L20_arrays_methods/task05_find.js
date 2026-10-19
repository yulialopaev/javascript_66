const cats = [
  { name: "Whiskers", age: 3, color: "black", weight: 4.5 },
  { name: "Tom", age: 5, color: "white", weight: 7.5 },
  { name: "Garfield", age: 7, color: "brown", weight: 9.5 },
  { name: "Tiger", age: 2, color: "gray", weight: 6.5 },
  { name: "Max", age: 10, color: "black", weight: 11.5 },
];

const totalWeight = cats.reduce((acc, cat) => acc + cat.weight, 0);
console.log("Total weight of cats: ", totalWeight);

const catWithAge2 = cats.find((cat) => cat.age === 2);
console.log("Cat with age 2: ", catWithAge2); // -> { name: 'Tiger', age: 2, color: 'gray', weight: 6.5 }

const catWithAge22 = cats.find((cat) => cat.age === 22);
console.log("Cat with age 22: ", catWithAge22); // -> undefined
if (catWithAge22) {
  console.log("Found cat with age 22", catWithAge22);
} else {
  console.log("No cat with age 22");
}

console.log(
  "Cat with age 2: ",
  catWithAge2 ? catWithAge2 : "No cat with age 2",
); // Cat with age 2:  { name: 'Tiger', age: 2, color: 'gray', weight: 6.5 }

