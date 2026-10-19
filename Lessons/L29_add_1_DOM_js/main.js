// Document - объект DOM

// Методы DOM API
// .document.getElementById()
// .document.createElement()
// .document.querySelector()


const app = document.querySelector("#app"); // получение объекта. Получаем ссылку на элемент с id="app"
console.log(app)
console.dir(app)
// const app1 = document.getElementById("app");
// console.log(app === app1) // -> true
// .append - добавляет в DOM


// const li = document.createElement("li")
// li.textContent = "Product:"
// app.prepend(li)
// prepend - добавляет перед элементом
// app.appendChild(li)
// appendChild - добавляет один узел в конец родителя

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

    form.append(input, button);

    const list = document.createElement("ul");
    app.append(form, list)

    return {form, input, list}
}


const {form, input, list} = createUI(app);
const uniqueProducts = new Set()

// .addEventListener

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
    event.target.classList.toggle("completed")
})




function handleSubmit(event) {
    event.preventDefault();

    const productName = input.value.trim();
    if (!productName) {
        input.focus()
        return
    }

    if (uniqueProducts.has(productName)) {
        input.value = "";
        return;
    }
    uniqueProducts.add(productName)
    console.log(uniqueProducts)

    const li = document.createElement("li");
    li.textContent = productName;
    list.append(li);

    // li.addEventListener("click", (event) => {
    //     li.classList.toggle("completed")
    // })

    // li.addEventListener("click", () => {
    //     if (li.textContent.includes(" ✅")) {
    //         li.textContent = li.textContent.replace(" ✅", "")
    //     } else {
    //         li.textContent += " ✅"
    //     }
    // })

    input.value = "";
    input.focus();
}

form.addEventListener("submit", handleSubmit)


console.dir(form)