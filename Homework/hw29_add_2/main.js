import {draftProducts, products} from './products.js';
import {createUI} from './createUI.js';
import {
    renderProducts,
    toggleProduct,
    addProduct,
    filterProducts,
    createDraft,
    cancelDraft,
    saveDraft
} from "./functions.js";

const app = document.querySelector('#app');
let isDraftMode = false;

const {
    productListContainer, addProductForm,
    productName, productCategory, allFilterButton,
    toBuyFilterButton, boughtFilterButton,
    createDraftButton, saveDraftChangesButton,
    cancelDraftChangesButton, draftListContainer
} = createUI(app);

renderProducts(products, productListContainer);

function handleSubmit(event) {
    event.preventDefault();


    const name = productName.value.trim();
    const category = productCategory.value.trim();

    if (isDraftMode) {
        draftListContainer.textContent = "";
        addProduct(name, category, draftProducts);
        renderProducts(draftProducts, draftListContainer);
    } else {
        productListContainer.textContent = "";
        addProduct(name, category, products);
        renderProducts(products, productListContainer);
    }


    productName.value = "";
    productName.focus();
    productCategory.value = "";
}

addProductForm.addEventListener('submit', handleSubmit);

productListContainer.addEventListener("click", (event) => {
    const p = event.target.closest("p");
    if (!p) return;
    p.classList.toggle("bought");
    toggleProduct(products, Number(p.dataset.id));
})

allFilterButton.addEventListener("click", () =>
    filterProducts(products, "all", productListContainer));

toBuyFilterButton.addEventListener("click", () =>
    filterProducts(products, "toBuy", productListContainer));

boughtFilterButton.addEventListener("click", () =>
    filterProducts(products, "bought", productListContainer));

createDraftButton.addEventListener("click", () => {
    isDraftMode = true;
    draftProducts.length = 0;
    draftListContainer.textContent = "";

    const currentProducts = structuredClone(products);
    currentProducts.forEach(product => draftProducts.push(product))

    createDraft(draftProducts, draftListContainer);

    createDraftButton.disabled = true;
    saveDraftChangesButton.disabled = false;
    cancelDraftChangesButton.disabled = false;
});

draftListContainer.addEventListener("click", (event) => {
    const p = event.target.closest("p");
    if (!p) return;
    p.classList.toggle("bought");
    toggleProduct(draftProducts, Number(p.dataset.id));
})

saveDraftChangesButton.addEventListener("click", () => {
    saveDraft(products, productListContainer, draftProducts, draftListContainer);
    saveDraftChangesButton.disabled = true;
    cancelDraftChangesButton.disabled = true;
    createDraftButton.disabled = false;
})

cancelDraftChangesButton.addEventListener("click", () => {
    isDraftMode = false;
    createDraftButton.disabled = false;
    saveDraftChangesButton.disabled = true;
    cancelDraftChangesButton.disabled = true;
    cancelDraft(draftProducts, draftListContainer);

    console.log(draftProducts)
    console.log(products)


});


