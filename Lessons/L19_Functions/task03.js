// objects

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.firstName); // -> John
console.log(person.age); // -> 25
console.log(person.fullName()); // -> John Doe

person.age = 26;
console.log(person.age); // -> 26
console.log(person.hobby); // -> undefined

console.log("----------------------");

const peter = {
  firstName: "Peter",
  lastName: "Parker",
  age: 19,
};

console.log(peter);
console.log(person);

// console.log(peter.fullName()); // -> ERROR

peter.fullName = function () {
  return `${this.firstName.toUpperCase()} ${this.lastName.toLowerCase()}`;
};

console.log(peter.fullName());

peter["hobby"] = "gaming";
console.log(peter);

let key = "hobby";
console.log(peter.key); // -> undefined
console.log(peter[key]); // -> gaming
console.log(peter["key"]); // -> undefined

for (k in peter) {
  console.log(`${k} -> ${peter[k]}`);
  if (typeof peter[k] === "function") {
    res = peter[k]();
    console.log(res);
  }
}

// peter."my dog" = "Bobik" -> ERROR
peter["my dog"] = "Bobik";
console.log(peter);

console.log("-------------------------------");

const mary = new Person(2000, "Mary", "Poppins", 30);

function Person(id, firstName, lastName, age) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

console.log(mary);
// console.log(mary.fullName()); -> ERROR -> no field
console.log(mary.fullName());
console.log("--------------------------------");

const persons = [
  mary,
  peter,
  new Person(3000, "Jack", "Brown", 24),
  {
    id: 4000,
    name: "Bobik",
    golos: function () {
      console.log("gav gav");
    },
  },
];

console.log(persons);
