import {add, subtract, multiply, divide} from "./math.js";
import {getCircleArea, getCircleLength, getRectangleArea} from "./geometry.js";


// math
const mathResult1 = add(15, 7);
console.log(`15 + 7 = ${mathResult1}`);

const mathResult2 = subtract(20, 8);
console.log(`20 - 8 = ${mathResult2}`);

const mathResult3 = multiply(6, 9);
console.log(`6 * 9 = ${mathResult3}`);

const mathResult4 = divide(100, 4);
console.log(`100 / 4 = ${mathResult4}`);

const mathResult5 = divide(10, 0);
console.log(`10 / 0 = ${mathResult5}`);

//geometry
const geometryResult1 = getCircleArea(5);
console.log(`Circle area (r=5): ${geometryResult1}`);

const geometryResult2 = getRectangleArea(8, 12);
console.log(`Rectangle area (8x12): ${geometryResult2}`);

const geometryResult3 = getCircleLength(10);
console.log(`Circle length (r=10): ${geometryResult3}`);