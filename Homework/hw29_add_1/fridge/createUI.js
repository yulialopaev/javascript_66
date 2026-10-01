export function createUI() {
    const groceryForm = document.createElement("form");
    groceryForm.id = "productForm";

    const groceryFormContainer = document.createElement("div");

    const groceryTitle = document.createElement("h1");
    groceryTitle.textContent = "Grocery List";

    const productInput = document.createElement("input");
    productInput.id = "productInput";
    productInput.placeholder = "E.g., Milk";

    const addButton = document.createElement("button");
    addButton.id = "addButton";
    addButton.textContent = "Add to list";
    addButton.type = "submit";

    const groceryListContainer = document.querySelector("#groceryListContainer");

    const groceryList = document.createElement("ul");

    const messageText = document.createElement("p");
    messageText.id = "messageText";
    messageText.textContent = "Enter a product name"

    const addMissingProductsButton = document.createElement("button")
    addMissingProductsButton.textContent = "Add missing products"

    groceryFormContainer.append(groceryList)
    groceryForm.append(groceryTitle, productInput, addButton, messageText)
    groceryListContainer.append(groceryForm, groceryList, addMissingProductsButton)

    console.log(document.querySelector("#productInput"))



    return {
        groceryForm, productInput, groceryList, groceryListContainer, messageText, addMissingProductsButton
    }
}
