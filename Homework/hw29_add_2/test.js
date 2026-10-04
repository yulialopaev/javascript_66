import {products} from "./products.js";

const copy = products
console.log(copy === products)
console.log(copy[0] === products[0])

console.log("----------------")
const copy1 = structuredClone(products)
console.log(copy1 === products)
console.log(copy1[0] === products[0])

console.log("----------------")
const copy2 = [...products]
console.log(copy2 === products)
console.log(copy2[0] === products[0])