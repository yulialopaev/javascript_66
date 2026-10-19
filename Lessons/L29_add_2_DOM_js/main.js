const app = document.querySelector("#app");

const productsFromList = [
    "Milk", "milk", "MILK", "Potato", "cucumber", "BUTTER", "butter", "BUTTER", "butter", ""
]

function createUI(app) {
    const title = document.createElement("h1")
    title.textContent = "Product List"
    app.append(title);

    const form = document.createElement("form");

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter product name";

    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Add to List";

    const addFromListButton = document.createElement("button");
    addFromListButton.type = "button"
    addFromListButton.textContent = "Добавить из списка"

    form.append(input, button, addFromListButton);

    const list = document.createElement("ul");
    app.append(form, list)

    return {form, input, list, addFromListButton}
}


const {
    form, input, list,
    addFromListButton
} = createUI(app);



function normalizeProductName(productName) {
    return productName.trim().toLowerCase();
}

function hasProduct(productName) {
    const normalizedName = normalizeProductName(productName);
    return products.some(product => normalizeProductName(product) === normalizedName)
}

const uniqueProducts = new Set(productsFromList)
const products = []

function handleAddProductFromList() {
    // const uniqueProducts = [...new Set(productsFromList)]
    productsFromList.forEach(addProduct);
    console.log(uniqueProducts)
}

addFromListButton.addEventListener("click", handleAddProductFromList)

// Вариант 1
// list.addEventListener("click", (event) => {
//     console.log("target", event.target)
//     console.log("current target", event.currentTarget)
//     if(event.target.tagName !== "LI") return;
//     event.target.classList.toggle("completed")
// })

list.addEventListener("click", (event) => {
    const li = event.target.closest("li");
    if (!li || !list.contains(li)) return;
    li.classList.toggle("completed")
})




function addProduct(productName) {
    if (hasProduct(productName) || !productName) {
        input.value = "";
        input.focus()
        return;
    }

    products.push(productName)

    const li = document.createElement("li");
    li.textContent = productName;
    list.append(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const productName = input.value.trim()

    uniqueProducts.add(productName)
    input.value = "";
    input.focus();

    addProduct(productName)

}

form.addEventListener("submit", handleSubmit)


console.dir(form)