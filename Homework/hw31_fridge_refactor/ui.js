export function createUI(app) {
    const title = document.createElement("h1");
    title.textContent = "Список продуктов";
    app.append(title); //добавить в  DOM после элемента,  prepend - перед элементом
    const form = document.createElement("form");
    const input = document.createElement("input");
    input.type = "text"; //НЕ ОБЯЗАТЕЛЬНО - ЭТО ДЕФОЛТНОЕ ЗНАЧЕНИЕ
    input.placeholder = "Введите продукт";
    const categoryInput = document.createElement("input");
    categoryInput.type = "text";
    categoryInput.placeholder = "Категория";
    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Добавить";

    // Message
    const messageText = document.createElement("p");
    messageText.classList.add("message");

    // Info Panel
    const infoPanel = document.createElement("div");
    infoPanel.classList.add("mode-panel");
    const modeTitle = document.createElement("h2");
    const modeDescription = document.createElement("p");
    modeDescription.textContent = "Вы находитесь в режиме основного списка";
    modeTitle.textContent = "Основной список";

    const filterAllButton = document.createElement("button");
    filterAllButton.type = "button";
    filterAllButton.textContent = "Все";

    const filterNeedButton = document.createElement("button");
    filterNeedButton.type = "button";
    filterNeedButton.textContent = "Нужно купить";

    const filterBoughtButton = document.createElement("button");
    filterBoughtButton.type = "button";
    filterBoughtButton.textContent = "Куплено";

    const filters = document.createElement("div");

    filters.append(
        filterAllButton,
        filterNeedButton,
        filterBoughtButton
    );

    form.append(input, categoryInput, button);
    infoPanel.append(modeTitle, modeDescription);

    const list = document.createElement("ul");
    const createDraftButton = document.createElement("button");
    createDraftButton.type = "button";
    createDraftButton.textContent = "Создать черновик";

    const saveDraftButton = document.createElement("button");
    saveDraftButton.type = "button";
    saveDraftButton.textContent = "Сохранить изменения";


    const cancelDraftButton = document.createElement("button");
    cancelDraftButton.type = "button";
    cancelDraftButton.textContent = "Отменить изменения";


    app.append(form, messageText, infoPanel, list, filters, createDraftButton, saveDraftButton, cancelDraftButton);
    return {
        form, messageText, infoPanel, modeTitle, modeDescription, input, list, categoryInput,
        filterAllButton,
        filterNeedButton,
        filterBoughtButton,
        createDraftButton,
        saveDraftButton,
        cancelDraftButton,
    };
}

export function renderProducts(productsToRender, list) {
    list.replaceChildren();


    productsToRender.forEach(product => {
        const li = document.createElement("li");
        const span = document.createElement("span");

        li.dataset.id = product.id;

        span.textContent =
            `${product.name} — ${product.category}`;

        if (product.bought) {
            span.classList.add("bought");
        }
        const infoButton = document.createElement("button");
        infoButton.type = "button";
        infoButton.textContent = "Show information";
        li.append(span, infoButton);

        let isSecondClick = false
        infoButton.addEventListener("click", (e) => {

            console.log("clicked");
            if(!isSecondClick) {
                showInformation(span, product);
                e.stopPropagation();
                infoButton.textContent = "Hide information";
                isSecondClick = true;
            } else {
                e.stopPropagation();
                span.textContent =
                    `${product.name} — ${product.category}`;
                infoButton.textContent = "Show information";
                isSecondClick = false;
            }


        })
        list.append(li);
    });
}

function showInformation(span, product) {
    span.textContent = `${product.name} - ${product.category} - ${product.bought ? "куплено" : "не куплено"}`;
}


