const products = [
    {
        id: 1,
        name: "Sourdough Bread",
        slug: "sourdough-bread",
        category: "bread",
        categoryName: "Artisan Bread",
        description: "Traditional artisan sourdough loaf.",
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
        price: 45.00,
        image: "assets/images/brioche-rolls.jpg",
        featured: false,
        available: true,
        variants: [
            { name: "Pack of 6", price: 45.00 }
        ]
    }
];