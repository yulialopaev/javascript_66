function sayHello(name = "Anonymous") {
  console.log(`Hello, ${name}!`);
}

sayHello("John");
sayHello();
sayHello("Maria", 1, 2, 3, "Petya", true);

function print(a, b, ...args) {
  console.log(a);
  console.log(b);
  for (let element of args) {
    console.log(`${typeof element}: ${element}`);
  }
  args[2]()
}

// print("Yulia", "Igor", 3, 5, true);
// print("a", "b");
// print("qqq");
print(1,2,3,true, () => console.log("Hello"), "Petya")
