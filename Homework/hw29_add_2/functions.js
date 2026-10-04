export function renderProducts(productsToRender, div) {
    return productsToRender.map(product => {
        const p = document.createElement('p');
        p.dataset.id = product.id;
        p.textContent = `- ${product.name}, ${product.category}`
        div.append(p);
        if (product.bought) {
            p.classList.add('bought');
        }
    })
}

export function normalizeProductName(productName) {
    return productName.trim().toLowerCase();
}

export function hasProduct(productName, productsArray) {
    const normalizedName = normalizeProductName(productName);
    return productsArray.some(product => normalizeProductName(product.name) === normalizedName)
}

export function addProduct(name, category, productsArray) {
    if (hasProduct(name, productsArray) || !name || !category) {
        return;
    }
    productsArray.push({id: productsArray.length + 1, name, category, bought: false});
}

export function toggleProduct(products, id) {
    const product = products.find(product => product.id === Number(id));
    if (product) {
        product.bought = !product.bought
    }
}

export function filterProducts(productsArray, filter, container) {
    if (filter === "all") {
        container.textContent = "";
        renderProducts(productsArray, container)
    }
    if (filter === "toBuy") {
        container.textContent = ""
        const toBuyProducts = productsArray.filter(product => product.bought === false)
        renderProducts(toBuyProducts, container)
    }
    if (filter === "bought") {
        container.textContent = ""
        const boughtProducts = productsArray.filter(product => product.bought === true)
        renderProducts(boughtProducts, container)
    }
}

export function createDraft(productsArray, container) {
    renderProducts(productsArray, container);
}

export function saveDraft(productsArray, productsContainer, draftArray, draftContainer) {
    productsContainer.textContent = "";
    productsArray.length = 0;
    draftArray.forEach(product => productsArray.push(product))
    renderProducts(productsArray, productsContainer);
    draftArray.length = 0;
    draftContainer.textContent = "";
}

export function cancelDraft(productsArray, container) {
    productsArray.length = 0;
    container.textContent = "";
}
