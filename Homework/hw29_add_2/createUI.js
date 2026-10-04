export function createUI(app) {

    const productListContainer = document.createElement('div');

    const h1 = document.createElement('h1');
    h1.textContent = 'Список продуктов';

    const addProductForm = document.createElement('form');

    const labelForProductName = document.createElement('label');
    labelForProductName.htmlFor = 'productName';
    labelForProductName.textContent = 'Название: ';

    const productName = document.createElement('input');
    productName.id = 'productName';

    const labelForProductCategory = document.createElement('label');
    labelForProductCategory.htmlFor = 'productCategory';
    labelForProductCategory.textContent = 'Категория: ';

    const productCategory = document.createElement('input');
    productCategory.id = 'productCategory';

    const addProductButton = document.createElement('button');
    addProductButton.type = 'submit';
    addProductButton.textContent = 'Добавить';

    const filterButtonsContainer = document.createElement("div")
    filterButtonsContainer.classList.add("filter-buttons-container")

    const allFilterButton = document.createElement('button');
    allFilterButton.textContent = 'Все продукты';

    const toBuyFilterButton = document.createElement('button');
    toBuyFilterButton.textContent = 'Нужно купить';

    const boughtFilterButton = document.createElement('button');
    boughtFilterButton.textContent = 'Куплено';

    const draftContainer = document.createElement("div")
    draftContainer.classList.add("draft-container")

    const createDraftButton = document.createElement("button");
    createDraftButton.textContent = "Создать черновик";

    const saveDraftChangesButton = document.createElement("button");
    saveDraftChangesButton.textContent = "Сохранить изменения";
    saveDraftChangesButton.disabled = true

    const cancelDraftChangesButton = document.createElement("button");
    cancelDraftChangesButton.textContent = "Отменить изменения";
    cancelDraftChangesButton.disabled = true

    const draftListContainer = document.createElement("div")

    filterButtonsContainer.append(allFilterButton, toBuyFilterButton, boughtFilterButton)
    draftContainer.append(createDraftButton, saveDraftChangesButton, cancelDraftChangesButton, draftListContainer);
    app.append(h1, addProductForm, filterButtonsContainer,
        productListContainer, draftContainer);
    addProductForm.append(labelForProductName, productName, labelForProductCategory, productCategory, addProductButton);

    return {
        app, productListContainer,
        addProductForm, productName, productCategory, allFilterButton, toBuyFilterButton, boughtFilterButton,
        draftContainer, createDraftButton, saveDraftChangesButton: saveDraftChangesButton, cancelDraftChangesButton,
        draftListContainer
    };
}