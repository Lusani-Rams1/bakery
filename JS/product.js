    (() => {

    // GET PRODUCT FROM URL// 
    const params = new URLSearchParams(window.location.search);

    const slug = params.get("slug");

    const product = products.find(item => item.slug === slug);

    const productContent = document.getElementById("productContent");

    const productNotFound = document.getElementById("productNotFound");

    // HANDLE INVALID PRODUCT// 
    if (!product) {

        productNotFound.hidden = false;

        document.title = "Product Not Found | Flour & Co.";

        return;

    }

    productContent.hidden = false;

    // CURRENCY FORMATTER// 
    function formatPrice(price) {

        return new Intl.NumberFormat("en-ZA", {
            style: "currency",
            currency: "ZAR"
        }).format(price);

    }

    // DISPLAY PRODUCT INFORMATION// 
    document.title = `${product.name} | Flour & Co.`;

    document.getElementById("breadcrumbProduct").textContent =
        product.name;

    document.getElementById("productName").textContent =
        product.name;

    document.getElementById("productCategory").textContent =
        product.categoryName;

    document.getElementById("productDescription").textContent =
        product.description;

    document.getElementById("fullDescription").textContent =
        product.fullDescription || product.description;

    document.getElementById("productIngredients").textContent =
        product.ingredients ||
        "Please contact the bakery for ingredient information.";

    document.getElementById("productAllergens").textContent =
        product.allergens ||
        "Allergen information has not been confirmed. Please contact the bakery before consuming.";

    const productImage = document.getElementById("productImage");

    productImage.src = product.image;
    productImage.alt = product.name;

    // PRODUCT AVAILABILITY//
    const availability =
        document.getElementById("productAvailability");

    const statusDot =
        document.getElementById("statusDot");

    availability.textContent = product.available
        ? "Available"
        : "Sold Out";

    statusDot.classList.toggle(
        "sold-out",
        !product.available
    );

    // PRODUCT VARIANTS// 
    const variantOptions =
        document.getElementById("variantOptions");

    const productPrice =
        document.getElementById("productPrice");

    const variants = product.variants?.length
        ? product.variants
        : [
            {
                name: "Standard",
                price: product.price
            }
        ];

    let selectedVariant = variants[0];


    function updatePrice() {

        productPrice.textContent =
            formatPrice(selectedVariant.price);

    }


    function renderVariants() {

        variantOptions.replaceChildren();

        variants.forEach((variant, index) => {

            const option = document.createElement("label");

            option.className = "variant-option";

            const radio = document.createElement("input");

            radio.type = "radio";
            radio.name = "productVariant";
            radio.value = String(index);
            radio.checked = index === 0;
            radio.disabled = !product.available;

            const name = document.createElement("span");

            name.className = "variant-name";
            name.textContent = variant.name;

            const price = document.createElement("span");

            price.className = "variant-price";
            price.textContent = formatPrice(variant.price);

            option.classList.toggle(
                "selected",
                radio.checked
            );

            radio.addEventListener("change", () => {

                selectedVariant = variant;

                document.querySelectorAll(".variant-option")
                    .forEach(item => {

                        item.classList.remove("selected");

                    });

                option.classList.add("selected");

                updatePrice();

            });

            option.append(radio, name, price);

            variantOptions.appendChild(option);

        });

        updatePrice();

    }

    // RELATED PRODUCTS// 
    const relatedContainer =
        document.getElementById("relatedProducts");

    function renderRelatedProducts() {

        const sameCategory = products.filter(item =>
            item.id !== product.id &&
            item.category === product.category &&
            item.available
        );

        const otherProducts = products.filter(item =>
            item.id !== product.id &&
            item.category !== product.category &&
            item.available
        );

        const related = [
            ...sameCategory,
            ...otherProducts
        ].slice(0, 4);

        relatedContainer.replaceChildren();

        related.forEach(item => {

            const card = document.createElement("a");

            card.className = "related-card";

            card.href =
                `product.html?slug=${encodeURIComponent(item.slug)}`;

            const imageContainer =
                document.createElement("div");

            imageContainer.className = "related-image";

            const image = document.createElement("img");

            image.src = item.image;
            image.alt = item.name;
            image.loading = "lazy";

            imageContainer.appendChild(image);

            const info = document.createElement("div");

            info.className = "related-info";

            const title = document.createElement("h3");

            title.textContent = item.name;

            const price = document.createElement("p");

            const startingPrice = item.variants?.length
                ? Math.min(...item.variants.map(v => v.price))
                : item.price;

            price.textContent = item.variants?.length > 1
                ? `From ${formatPrice(startingPrice)}`
                : formatPrice(startingPrice);

            info.append(title, price);

            card.append(imageContainer, info);

            relatedContainer.appendChild(card);

        });

    }

    // INITIALISE PRODUCT PAGE// 
    renderVariants();

    renderRelatedProducts();

})();
