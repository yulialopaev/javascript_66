import {
    addProduct,
    cancelDraft,
    createDraft, draftProducts,
    saveDraft,
    toggleProduct
} from "./products.js";

import {createUI, renderProducts} from "./ui.js";
import {getCurrentProducts} from "./utils.js";

const app = document.querySelector("#app");

console.log(app);

const {
    form, input, messageText,
    infoPanel, modeTitle, modeDescription, list,
    categoryInput, filterAllButton,
    filterNeedButton,
    filterBoughtButton,
    createDraftButton,
    saveDraftButton,
    cancelDraftButton
} = createUI(app);

let activeFilter = "all";

// Функция переключения режима панели информации
function updateMode(mode) {
    if (mode === "main") {
        modeTitle.textContent = "Основной список";
        modeDescription.textContent = "Вы находитесь в режиме основного списка";
        infoPanel.classList = "mode-panel";
        createDraftButton.disabled = false;
        saveDraftButton.disabled = true;
        cancelDraftButton.disabled = true;
    }
    if (mode === "draft") {
        modeTitle.textContent = "Черновик";
        modeDescription.textContent = "Вы находитесь в режиме черновика";
        infoPanel.classList.add("draft-mode");
        createDraftButton.disabled = true;
        saveDraftButton.disabled = false;
        cancelDraftButton.disabled = false;
    }
}

function render() {
    const currentProducts = getCurrentProducts();
    let visibleProducts = currentProducts;
    messageText.textContent = ""
    if (activeFilter === "need") {
        visibleProducts = currentProducts.filter(
            product => !product.bought
        )
        if (visibleProducts.length === 0) {
            messageText.textContent = "Продукты, которые нужно купить, не найдены";
        }
    }
    if (activeFilter === "bought") {
        visibleProducts = currentProducts.filter(
            product => product.bought
        )
        if (visibleProducts.length === 0) {
            messageText.textContent = "Купленные продукты не найдены";
        }
    }
    updateMode(draftProducts === null ? "main" : "draft")
    renderProducts(visibleProducts, list);
}


filterAllButton.addEventListener(
    "click",
    () => {
        activeFilter = "all";
        render();
    }
);

filterNeedButton.addEventListener(
    "click",
    () => {
        activeFilter = "need";
        render();
    }
);


filterBoughtButton.addEventListener(
    "click",
    () => {
        activeFilter = "bought";
        render();
    }
);

list.addEventListener("click", (event) => {
    const li = event.target.closest("li");
    if (!li || !list.contains(li)) {
        return

    }
    const id = Number(li.dataset.id);
    toggleProduct(id);
    render();
});


function handleSubmit(e) {
    e.preventDefault();
    messageText.textContent = "";
    const productName = input.value.trim();
    const category = categoryInput.value.trim();

    if (!productName || !category) {
        messageText.textContent = "Продукт не был добавлен. Пожалуйста, укажите название и категорию";
        return;
    }

    const added = addProduct(productName, category);
    if (!added) {
        messageText.textContent = "Продукт уже существует. Пожалуйста, введите новый продукт";
        return;
    }
    input.value = "";
    categoryInput.value = "";
    input.focus();
    render();
}

//addEventListener
form.addEventListener("submit", handleSubmit);

createDraftButton.addEventListener(
    "click",
    () => {
        createDraft();
        render();
    }
);

saveDraftButton.addEventListener(
    "click",
    () => {
        saveDraft();
        render();
    }
);

cancelDraftButton.addEventListener(
    "click",
    () => {
        cancelDraft();
        render();
    }
);



render();















