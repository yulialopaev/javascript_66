import {FRIDGE_FILE} from "./config.js";
import {readFromJsonFile} from "./fileService.js";

const fridgeProductList = await readFromJsonFile(FRIDGE_FILE);

function getUniqueProducts(arr) {
    const seenNames = new Set();

    for (const product of arr) {
        const lowerName = product.name.trim().toLowerCase()
        seenNames.add(lowerName);
    }
    return seenNames
}

export const uniqueFridgeProducts = getUniqueProducts(fridgeProductList);

const uniqueProductList = document.createElement("ul")
const fridgeTitle = document.createElement("h2")
fridgeTitle.textContent = "Products in your fridge"

const fridgeContainer = document.querySelector("#fridgeContainer")
// fridgeContainer.id = "fridgeContainer"

for (const product of uniqueFridgeProducts) {
    const li = document.createElement("li")
    li.textContent = product.charAt(0).toUpperCase() + product.slice(1)
    uniqueProductList.append(li)
}

fridgeContainer.append(fridgeTitle, uniqueProductList)
export default fridgeContainer
