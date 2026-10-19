const cats = [
  { name: "Whiskers", age: 2, color: "black", weight: 4.5 },
  { name: "Tom", age: 7, color: "white", weight: 7.5 },
  { name: "Garfield", age: 7, color: "brown", weight: 9.5 },
  { name: "Tiger", age: 2, color: "gray", weight: 6.5 },
  { name: "Max", age: 10, color: "black", weight: 11.5 },
];

let sortedCats = cats.sort((a,b) => a.age - b.age);
console.log(sortedCats);

sortedCats = cats.sort((b,a) => a.age - b.age);
console.log(sortedCats); // -> reverse order

const sortedCatsByName = cats.sort((a,b) => a.name.localeCompare(b.name));
console.log(sortedCatsByName);

const sortesCatsByAgeAndWeight = cats.sort((a,b) => {
    if (a.age === b.age) {
        return a.weight - b.weight;
    }
    return a.age - b.age;
});
console.log(sortesCatsByAgeAndWeight);

const res = cats.sort();
console.log(res);