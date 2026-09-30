const productsInFridge = [
    "Milk",
    "Bread",
    "Cheese",
    "Milk",
    "Eggs",
    "bread"
];

export const uniqueFridgeProducts = [...new Set(productsInFridge.map(p => p.trim().toLowerCase()))]

const uniqueProductList = document.createElement("ul")
const fridgeTitle = document.createElement("h2")
fridgeTitle.textContent = "Product List"

const fridgeContainer = document.createElement("div")
fridgeContainer.id = "fridgeContainer"

const showButton = document.createElement("button")
showButton.id = "showButton";
showButton.textContent = "Show products";

showButton.addEventListener("click", () => {
    uniqueProductList.textContent = ""
    for (let i = 0; i < uniqueFridgeProducts.length; i++) {
            const li = document.createElement("li")
            li.textContent = uniqueFridgeProducts[i].charAt(0).toUpperCase() + uniqueFridgeProducts[i].slice(1)
            uniqueProductList.append(li)
        }

    }
)


fridgeContainer.append(fridgeTitle, showButton, uniqueProductList)
export default fridgeContainer
