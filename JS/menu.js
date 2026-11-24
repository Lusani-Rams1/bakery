(() => {
    // DOM ELEMENTS//
    const productGrid = document.getElementById("menuProductGrid");
    const productSearch = document.getElementById("productSearch");
    const sortProducts = document.getElementById("sortProducts");
    const productCount = document.getElementById("productCount");
    const emptyState = document.getElementById("emptyState");

    const filterButtons = document.querySelectorAll(".menu-filter");

    const clearFilters = document.getElementById("clearFilters");
    const resetFilters = document.getElementById("resetFilters");

    // FILTER STATE//
    let selectedCategory = "all";
    let searchQuery = "";
    let selectedSort = "default";

    // CURRENCY FORMATTER//
    function formatPrice(price) {

        return new Intl.NumberFormat("en-ZA", {
            style: "currency",
            currency: "ZAR"
        }).format(price);

    }

    // GET PRODUCT PRICE//
    function getProductPrice(product) {

        if (product.variants?.length) {

            return Math.min(
                ...product.variants.map(variant => variant.price)
            );

        }

        return product.price;

    }

    // CREATE PRODUCT CARD//
    function createProductCard(product) {

        const card = document.createElement("article");
        card.className = "menu-product-card";

        const imageContainer = document.createElement("div");
        imageContainer.className = "menu-product-image";

        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.name;
        image.loading = "lazy";

        const availability = document.createElement("span");

        availability.className = product.available
            ? "availability-badge"
            : "availability-badge sold-out";

        availability.textContent = product.available
            ? "AVAILABLE"
            : "SOLD OUT";

        imageContainer.append(image, availability);


        // Product information
        const info = document.createElement("div");
        info.className = "menu-product-info";

        const category = document.createElement("span");
        category.className = "menu-product-category";
        category.textContent = product.categoryName;

        const title = document.createElement("h3");
        title.textContent = product.name;

        const description = document.createElement("p");
        description.textContent = product.description;

        const price = document.createElement("span");
        price.className = "menu-product-price";

        const startingPrice = getProductPrice(product);

        price.textContent = product.variants?.length > 1
            ? `From ${formatPrice(startingPrice)}`
            : formatPrice(startingPrice);


        // Product details link
        const detailsLink = document.createElement("a");

        detailsLink.className = "product-details-btn";

        detailsLink.href =
            `product.html?slug=${encodeURIComponent(product.slug)}`;

        detailsLink.textContent = "View Product";

        const arrow = document.createElement("i");
        arrow.className = "fa-solid fa-arrow-right";
        arrow.setAttribute("aria-hidden", "true");

        detailsLink.appendChild(arrow);

        info.append(
            category,
            title,
            description,
            price,
            detailsLink
        );

        card.append(imageContainer, info);

        return card;

    }

    // FILTER AND SORT PRODUCTS// 
    function getFilteredProducts() {

        let filtered = products.filter(product => {

            const matchesCategory =
                selectedCategory === "all" ||
                product.category === selectedCategory;

            const matchesSearch =
                product.name.toLowerCase().includes(searchQuery) ||
                product.description.toLowerCase().includes(searchQuery) ||
                product.categoryName.toLowerCase().includes(searchQuery);

            return matchesCategory && matchesSearch;

        });


        switch (selectedSort) {

            case "price-low":

                filtered.sort((a, b) =>
                    getProductPrice(a) - getProductPrice(b)
                );

                break;


            case "price-high":

                filtered.sort((a, b) =>
                    getProductPrice(b) - getProductPrice(a)
                );

                break;


            case "name-az":

                filtered.sort((a, b) =>
                    a.name.localeCompare(b.name)
                );

                break;


            case "name-za":

                filtered.sort((a, b) =>
                    b.name.localeCompare(a.name)
                );

                break;

        }

        return filtered;

    }

    // RENDER PRODUCTS// 
    function renderProducts() {

        const filteredProducts = getFilteredProducts();

        productGrid.replaceChildren();

        const count = filteredProducts.length;

        productCount.textContent =
            `Showing ${count} ${count === 1 ? "product" : "products"}`;

        emptyState.hidden = count !== 0;

        productGrid.hidden = count === 0;

        filteredProducts.forEach(product => {

            productGrid.appendChild(
                createProductCard(product)
            );

        });

    }

    // CATEGORY FILTERS// 
    function updateActiveFilter() {

        filterButtons.forEach(button => {

            const isActive =
                button.dataset.category === selectedCategory;

            button.classList.toggle("active", isActive);

            button.setAttribute(
                "aria-pressed",
                String(isActive)
            );

        });

    }

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            selectedCategory = button.dataset.category;

            updateActiveFilter();

            renderProducts();

        });

    });

    // LIVE SEARCH// 
    productSearch.addEventListener("input", event => {

        searchQuery = event.target.value
            .trim()
            .toLowerCase();

        renderProducts();

    });

    // SORTING//
    sortProducts.addEventListener("change", event => {

        selectedSort = event.target.value;

        renderProducts();

    });

    // RESET FILTERS// 
    function resetAllFilters() {

        selectedCategory = "all";
        searchQuery = "";
        selectedSort = "default";

        productSearch.value = "";
        sortProducts.value = "default";

        updateActiveFilter();

        renderProducts();

    }

    clearFilters.addEventListener("click", resetAllFilters);

    resetFilters.addEventListener("click", resetAllFilters);

    // READ CATEGORY FROM URL// 
    const params = new URLSearchParams(window.location.search);

    const categoryParam = params.get("category");

    const validCategories = [
        "all",
        "bread",
        "pastries",
        "sweet",
        "savoury"
    ];

    if (validCategories.includes(categoryParam)) {

        selectedCategory = categoryParam;

    }

    // INITIALISE MENU// 
    updateActiveFilter();

    renderProducts();

})();
