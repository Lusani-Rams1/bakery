const products = [
    {
        id: 1,
        name: "Sourdough Bread",
        slug: "sourdough-bread",
        category: "bread",
        categoryName: "Artisan Bread",
        description: "Traditional artisan sourdough loaf.",
        fullDescription: "A traditional artisan sourdough loaf with a crispy crust and a soft, chewy interior.",
        ingredients: "Flour, water, salt, sourdough starter.",
        allergens: "Contains gluten.",
        price: 65.00,
        image: "assets/images/sourdough.jpg",
        featured: true,
        available: true,
        variants: [
            { name: "800g Loaf", price: 65.00 }
        ]
    },
    {
        id: 2,
        name: "French Baguette",
        slug: "french-baguette",
        category: "bread",
        categoryName: "Artisan Bread",
        description: "Crispy crust with a soft centre.",
        fullDescription: "A classic French baguette with a crispy crust and a soft, chewy interior.",
        ingredients: "Flour, water, salt, yeast.",
        allergens: "Contains gluten.",  
        price: 35.00,
        image: "assets/images/baguette.jpg",
        featured: false,
        available: true,
        variants: [
            { name: "Single Loaf", price: 35.00 }
        ]
    },
    {
        id: 3,
        name: "Butter Croissant",
        slug: "butter-croissant",
        category: "pastries",
        categoryName: "Croissants",
        description: "Golden, flaky and buttery.",
        fullDescription: "A golden, flaky, and buttery croissant perfect for breakfast or as a snack.",
        ingredients: "Flour, butter, sugar, eggs.",
        allergens: "Contains gluten, dairy.",
        price: 28.00,
        image: "assets/images/croissant.jpg",
        featured: true,
        available: true,
        variants: [
            { name: "Single", price: 28.00 },
            { name: "Box of 6", price: 150.00 }
        ]
    },
    {
        id: 4,
        name: "Chocolate Croissant",
        slug: "chocolate-croissant",
        category: "pastries",
        categoryName: "Croissants",
        description: "Flaky pastry filled with rich chocolate.",
        fullDescription: "A deliciously flaky pastry filled with rich, dark chocolate.",
        ingredients: "Flour, butter, sugar, eggs, dark chocolate, vanilla extract.",
        allergens: "Contains gluten, dairy.",
        price: 38.00,
        image: "assets/images/chocolate-croissant.jpg",
        featured: true,
        available: true,
        variants: [
            { name: "Single", price: 38.00 },
            { name: "Box of 6", price: 210.00 }
        ]
    },
    {
        id: 5,
        name: "Cinnamon Roll",
        slug: "cinnamon-roll",
        category: "sweet",
        categoryName: "Sweet Pastries",
        description: "Soft pastry with a cinnamon filling.",
        fullDescription: "A soft and fluffy pastry rolled with a sweet cinnamon filling and topped with icing.",
        ingredients: "Flour, butter, sugar, eggs, cinnamon, cream cheese.",
        allergens: "Contains gluten, dairy.",
        price: 35.00,
        image: "assets/images/cinnamon-roll.jpg",
        featured: true,
        available: true,
        variants: [
            { name: "Single", price: 35.00 }
        ]
    },
    {
        id: 6,
        name: "Spinach and Feta Pastry",
        slug: "spinach-feta-pastry",
        category: "savoury",
        categoryName: "Savoury Pastries",
        description: "Golden pastry filled with spinach and feta.",
        fullDescription: "A golden, flaky pastry filled with a delicious mixture of spinach and feta cheese.",
        ingredients: "Flour, butter, spinach, feta cheese, eggs.",
        allergens: "Contains gluten, dairy.",
        price: 40.00,
        image: "assets/images/spinach-feta.jpg",
        featured: false,
        available: true,
        variants: [
            { name: "Single", price: 40.00 }
        ]
    },
    {
        id: 7,
        name: "Blueberry Muffin",
        slug: "blueberry-muffin",
        category: "sweet",
        categoryName: "Muffins",
        description: "Soft muffin filled with blueberries.",
        fullDescription: "A soft and moist muffin packed with juicy blueberries.",
        ingredients: "Flour, butter, sugar, eggs, blueberries.",
        allergens: "Contains gluten, dairy.",
        price: 25.00,
        image: "assets/images/blueberry-muffin.jpg",
        featured: false,
        available: true,
        variants: [
            { name: "Single", price: 25.00 }
        ]
    },
    {
        id: 8,
        name: "Brioche Rolls",
        slug: "brioche-rolls",
        category: "bread",
        categoryName: "Bread Rolls",
        description: "Soft and buttery brioche rolls.",
        fullDescription: "Soft, fluffy, and buttery brioche rolls perfect for sandwiches or as a side.",
        ingredients: "Flour, butter, sugar, eggs, milk.",
        allergens: "Contains gluten, dairy.",
        price: 45.00,
        image: "assets/images/brioche-rolls.jpg",
        featured: false,
        available: true,
        variants: [
            { name: "Pack of 6", price: 45.00 }
        ]
    }
];