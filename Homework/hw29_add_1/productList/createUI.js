import fridgeContainer from "./productsInFridge.js";

export function createUI(app) {
    const form = document.createElement("form");
    form.id = "productForm";

    const formContainer = document.createElement("div");

    const title = document.createElement("h1");
    title.textContent = "Grocery List";

    const productInput = document.createElement("input");
    productInput.id = "productInput";
    productInput.placeholder = "E.g., Milk";

    const addButton = document.createElement("button");
    addButton.id = "addButton";
    addButton.textContent = "Add to list";
    addButton.type = "submit";

    const addFromListButton = document.createElement("button");
    addFromListButton.id = "addFromListButton";
    addFromListButton.textContent = "Add from product list";
    addFromListButton.type = "button";

    const productListContainer = document.createElement("div");
    productListContainer.id = "productListContainer";

    const productList = document.createElement("ul");

    const messageText = document.createElement("p");
    messageText.id = "messageText";
    messageText.textContent = "Enter a product name"

    form.append(formContainer)
    app.append(form, fridgeContainer)
    productListContainer.append(productList)
    formContainer.append(title, productInput, addButton, addFromListButton, messageText, productListContainer)

    return {form, productInput, productList, addFromListButton, messageText}
}
