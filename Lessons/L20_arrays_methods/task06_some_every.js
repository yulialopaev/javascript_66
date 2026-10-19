const cats = [
  { name: "Whiskers", age: 3, color: "black", weight: 4.5 },
  { name: "Tom", age: 5, color: "white", weight: 7.5 },
  { name: "Garfield", age: 7, color: "brown", weight: 9.5 },
  { name: "Tiger", age: 2, color: "gray", weight: 6.5 },
  { name: "Max", age: 10, color: "black", weight: 11.5 },
];

const isHeavyCat = cats.some((cat) => cat.weight > 6);
if (isHeavyCat) {
  console.log("There is a cat with weight more than 6");
} else {
  console.log("There is no cat with weight more than 6");
}

const isKitten = cats.some((cat) => cat.age <= 3);
if (isKitten) {
  console.log("There is a kitten with age less than 3");
} else {
  console.log("There is no kitten with age less than 3");
}

const allCatsAreGray = cats.every((cat) => cat.color === "gray");
console.log(allCatsAreGray); // -> false
if (allCatsAreGray) {
  console.log("All cats are gray");
} else {
  console.log("Not all cats are gray");
}

const allCatsAreFat = cats.every((cat) => cat.weight > 4);
if (allCatsAreFat) {
  console.log("All cats are fat");
} else {
  console.log("Not all cats are fat");
}
