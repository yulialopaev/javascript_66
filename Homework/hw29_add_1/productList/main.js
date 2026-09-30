import {createUI} from "./createUI.js";
import {uniqueFridgeProducts} from "./productsInFridge.js";

const app = document.querySelector("#app");

const {form, productInput, productList, addFromListButton, messageText} = createUI(app);
const uniqueProducts = new Set();
const productsToBuy = []

function handleSubmit(event) {
    event.preventDefault();
    messageText.textContent = "Enter a product name";
    messageText.style.color = "black";

    const productName = productInput.value.trim();

    if (!productName) {
        messageText.textContent = "Product cannot be empty. Enter a product name";
        messageText.style.color = "red";
        productInput.focus();
        return;
    }

    if (uniqueProducts.has(productName.toLowerCase())) {
        productInput.value = "";
        messageText.textContent = "Product already exists. Enter a new product name";
        messageText.style.color = "red";
        return;
    }
    uniqueProducts.add(productName.toLowerCase());

    const li = document.createElement("li");
    li.textContent = productName.charAt(0).toUpperCase() + productName.slice(1);
    productList.append(li);
    productsToBuy.push(li.textContent)

    li.addEventListener("click", () => {
        if (li.textContent.includes(" ✅")) {
            li.textContent = li.textContent.replace(" ✅", "");
        } else {
            li.textContent += " ✅";
        }
    });


    productInput.value = "";
    productInput.focus();
}

form.addEventListener("submit", handleSubmit);


addFromListButton.addEventListener("click", () => {
    const addedList = uniqueProducts
    const newProducts = []
    for (const item of uniqueFridgeProducts) {
        if (!addedList.has(item)) {
            addedList.add(item)
            newProducts.push(item)
        }
    }
    for (const newProduct of newProducts) {
        const newLi = document.createElement("li")
        newLi.textContent = newProduct.charAt(0).toUpperCase() + newProduct.slice(1);
        productList.append(newLi);
    }

})