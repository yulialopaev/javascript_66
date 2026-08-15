const temperature = 0;
// Python: and or not
// JavaScript: && || !

if (temperature < 0) {
  console.log("Очень холодно");
} else if (temperature >= 0 && temperature < 20) {
  console.log("Холодно");
} else if (temperature >= 20 && temperature < 30) {
  console.log("Тепло");
} else {
  console.log("Жарко");
}

if (temperature < 0) {
  console.log("Очень холодно");
} else if (temperature < 20) {
  console.log("Холодно");
} else if (temperature < 30) {
  console.log("Тепло");
} else {
  console.log("Жарко");
}

// Тернарный оператор
let number = 5;
console.log(number % 2 === 0 ? "Even" : "Odd");

const age = 15;
const isAdult = age >= 18;

console.log(isAdult ? "Adult" : "Not adult");

number = 5;
switch (number) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Unknown day");
}

number = 6;
switch (number) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    break;
    console.log("Thursday");
  case 5:
    break;
    console.log("Friday");
  case 6:
  case 7:
    console.log("Weekend");
    break;
  default:
    console.log("Unknown day");
}

let myName; // для замены null и undefined на заданные данные
let result = myName ?? "Unknown";
console.log(result);

let price = 25.5;
console.log(price ?? "Price is not available");
