export function createUI() {
    const groceryForm = document.createElement("form");
    groceryForm.id = "productForm";

    const groceryFormContainer = document.createElement("div");

    const groceryTitle = document.createElement("h2");
    groceryTitle.textContent = "Список покупок";

    const productInput = document.createElement("input");
    productInput.id = "productInput";
    productInput.placeholder = "Например, молоко";

    const addButton = document.createElement("button");
    addButton.id = "addButton";
    addButton.textContent = "Добавить в список";
    addButton.type = "submit";

    const groceryListContainer = document.querySelector("#groceryListContainer");

    const groceryList = document.createElement("ul");

    const messageText = document.createElement("p");
    messageText.id = "messageText";
    messageText.textContent = "Введите название продукта"

    const addMissingProductsButton = document.createElement("button")
    addMissingProductsButton.textContent = "Добавить недостающие"

    groceryFormContainer.append(groceryList)
    groceryForm.append(groceryTitle, productInput, addButton, messageText)
    groceryListContainer.append(groceryForm, groceryList, addMissingProductsButton)

    console.log(document.querySelector("#productInput"))



    return {
        groceryForm, productInput, groceryList, groceryListContainer, messageText, addMissingProductsButton
    }
}
