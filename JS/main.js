// DISPLAY PRODUCTS// 
const productGrid = document.getElementById("productGrid");

function renderProducts(category = "all") {

    if (!productGrid) return;

    const filteredProducts = category === "all"
        ? products
        : products.filter(product => product.category === category);

    productGrid.replaceChildren();

    if (filteredProducts.length === 0) {
        const message = document.createElement("p");
        message.textContent = "No products available in this category.";
        productGrid.appendChild(message);
        return;
    }

    filteredProducts.forEach(product => {

        const card = document.createElement("article");
        card.className = "product-card";

        const imageContainer = document.createElement("div");
        imageContainer.className = "product-image";

        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.name;
        image.loading = "lazy";

        imageContainer.appendChild(image);

        if (product.featured) {
            const tag = document.createElement("span");
            tag.className = "product-tag";
            tag.textContent = "FEATURED";
            imageContainer.appendChild(tag);
        }

        const info = document.createElement("div");
        info.className = "product-info";

        const categoryLabel = document.createElement("span");
        categoryLabel.className = "product-category";
        categoryLabel.textContent = product.categoryName;

        const title = document.createElement("h3");
        title.textContent = product.name;

        const description = document.createElement("p");
        description.textContent = product.description;

        const price = document.createElement("span");
        price.className = "product-price";
        price.textContent = formatPrice(product.price);

        info.append(categoryLabel, title, description, price);
        card.append(imageContainer, info);

        productGrid.appendChild(card);

    });

}

// PRODUCT FILTERING// 
const filterButtons = document.querySelectorAll(".filter-btn");

function selectCategory(category) {

    filterButtons.forEach(button => {

        const isActive = button.dataset.filter === category;

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));

    });

    renderProducts(category);

}

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        selectCategory(button.dataset.filter);

    });

});

// CATEGORY CARDS//
const categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach(card => {

    card.addEventListener("click", () => {

        selectCategory(card.dataset.category);

    });

});

// MOBILE NAVIGATION// 
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function setMenuState(isOpen) {

    navLinks.classList.toggle("open", isOpen);

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

    const icon = menuToggle.querySelector("i");

    icon.classList.toggle("fa-bars", !isOpen);
    icon.classList.toggle("fa-xmark", isOpen);

}

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        setMenuState(!navLinks.classList.contains("open"));

    });

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            setMenuState(false);

        });

    });

    document.addEventListener("keydown", event => {

        if (
            event.key === "Escape" &&
            navLinks.classList.contains("open")
        ) {
            setMenuState(false);
            menuToggle.focus();
        }

    });

}

// FOOTER YEAR// 
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// INITIALISE HOMEPAGE// 
selectCategory("all");
