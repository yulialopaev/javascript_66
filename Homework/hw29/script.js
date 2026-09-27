const productInput = document.querySelector("#product");
const addButton = document.querySelector("#addProduct");
const productList = document.querySelector("#productList");
const messageText = document.querySelector("#messageText");

addButton.addEventListener(
    "click",
    async (event) => {
        event.preventDefault();
        messageText.textContent = "Enter a product namee"
        const product = productInput.value.trim();

        if (!product) {
            messageText.textContent = "Product cannot be empty. Enter ф product name";
            productInput.focus();
            return;
        }

        const li = document.createElement("li");
        li.textContent = product;
        li.addEventListener("click",
            event => {
                event.preventDefault()
                if (li.textContent.includes(" ✅")) {
                    li.textContent = li.textContent.replace(" ✅", "");
                } else {
                    li.textContent += " ✅"
                }
            })

        productList.append(li);
        productInput.value = "";
        productInput.focus();

    });


// Ещё один способ отправки по Enter нашла в интернете

// productInput.addEventListener(
//     "keypress",
//     event => {
//         if(event.key === "Enter") {
//             event.preventDefault();
//             addButton.click();
//         }
//     })
