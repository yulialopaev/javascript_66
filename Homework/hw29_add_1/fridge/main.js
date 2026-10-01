// Оркестратор
import {readFromJsonFile} from "./fileService.js";
import {getUserByName} from "./authService.js";
import {FRIDGE_FILE, USERS_FILE} from "./config.js";
import {createBasePromptByRole, createPrompt} from "./promptService.js";
import {askAi} from "./aiService.js";
import fridgeContainer from "./fridgeProductList.js";
import {createUI} from "./createUI.js"
import {uniqueFridgeProducts} from "./fridgeProductList.js";

const users = await readFromJsonFile(USERS_FILE);
const products = await readFromJsonFile(FRIDGE_FILE);

const app = document.getElementById("app")

const form = document.getElementById("searchForm");
const userNameInput = document.getElementById("userName");
const dishTitleInput = document.getElementById("dishTitle");
const result = document.getElementById("result")
const errorModal = document.getElementById("errorModal")
const errorMessage = document.getElementById("errorMessage")
const closeModal = document.getElementById("closeModal")
const searchButton = document.getElementById("searchButton")

const fridgeList = document.createElement("div")

const {groceryForm, productInput, groceryList, groceryListContainer, addMissingProductsButton, messageText} = createUI()
fridgeList.append(fridgeContainer)
app.append(fridgeList, groceryListContainer)
let answerArray = []

async function fridgeHandleSubmit(event) {
    event.preventDefault();
    searchButton.textContent = "Loading..."
    addMissingProductsButton.disabled = false;

    try {
        const userName = userNameInput.value.trim();
        const authenticatedUser = getUserByName(users, userName);
        const dishTitle = dishTitleInput.value.trim();

        console.log(authenticatedUser, dishTitle);

        if (!userName) {
            throw new Error("User name is required");
        }
        if (!dishTitle) {
            throw new Error("Dish title is required");
        }
        if (!authenticatedUser) {
            throw new Error("User not found");
        }

        const basePrompt = createBasePromptByRole(authenticatedUser)
        const prompt = createPrompt(basePrompt, dishTitle, products)
        console.log(prompt);

        const answer = await askAi(prompt)
        answerArray = JSON.parse(answer)

        result.textContent = ""

        for (const item of answerArray) {
            const listItem = document.createElement("li")
            listItem.textContent = item
            result.appendChild(listItem)
        }

        // result.textContent = answer
        console.log(answer)
        console.log(typeof answer)
    } catch (error) {
        console.error(error);
        errorMessage.textContent = error.message || "Произошла непредвиденная ошибка"
        errorModal.showModal()
    }
    searchButton.textContent = "Search"
}

form.addEventListener("submit", fridgeHandleSubmit)

closeModal.addEventListener(
    "click",
    () => errorModal.close())

const uniqueProducts = new Set();
const productsToBuy = []

function groceryHandleSubmit(event) {
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

    groceryList.append(li);
    productsToBuy.push(li.textContent)

    li.addEventListener("click", () => {
        if (li.textContent.includes(" ✅")) {
            li.textContent = li.textContent.replace(" ✅", "");
        } else {
            li.textContent += " ✅";
        }
    })
    ;
    productInput.value = "";
    productInput.focus();
}

groceryForm.addEventListener("submit", groceryHandleSubmit)

addMissingProductsButton.addEventListener("click", () => {


    const addedList = new Set([...uniqueProducts, ...uniqueFridgeProducts]);
    const newProducts = [];

    for (const item of answerArray) {
        const lowerItem = item.toLowerCase()
        if (!addedList.has(lowerItem)) {
            addedList.add(lowerItem);
            newProducts.push(lowerItem);
        }
    }
    for (const newProduct of newProducts) {
        const newLi = document.createElement("li");
        newLi.textContent = newProduct.charAt(0).toUpperCase() + newProduct.slice(1);
        groceryList.append(newLi);

        newLi.addEventListener("click", () => {
            if (newLi.textContent.includes(" ✅")) {
                newLi.textContent = newLi.textContent.replace(" ✅", "");
            } else {
                newLi.textContent += " ✅";
            }
        });
    }
    console.log(addedList)
    addMissingProductsButton.disabled = true;

})