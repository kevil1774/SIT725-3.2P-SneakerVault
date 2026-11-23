
const express = require('express');
const router = express.Router();

// Sample sneaker collection
const sneakers = [
    {
        id: 1,
        name: "Air Jordan 1 Retro High OG",
        brand: "Jordan",
        category: "Basketball",
        price: 16999,
        color: "Chicago Red",
        image: "/images/jordan-1.jpg",
        description: "An iconic basketball sneaker with classic streetwear style."
    },
    {
        id: 2,
        name: "Yeezy Boost 350 V2",
        brand: "Adidas",
        category: "Lifestyle",
        price: 22999,
        color: "Cream White",
        image: "/images/yeezy.jpg",
        description: "A comfortable lifestyle sneaker with a distinctive design."
    },
    {
        id: 3,
        name: "Air Max 90",
        brand: "Nike",
        category: "Running",
        price: 11999,
        color: "White Black",
        image: "/images/airmax.jpg",
        description: "A classic Nike sneaker with timeless design."
    },
    {
        id: 4,
        name: "New Balance 9060",
        brand: "New Balance",
        category: "Lifestyle",
        price: 14999,
        color: "Grey",
        image: "/images/newbalance.jpg",
        description: "A modern lifestyle sneaker with a bold silhouette."
    },
    {
        id: 5,
        name: "Suede Classic",
        brand: "Puma",
        category: "Casual",
        price: 6999,
        color: "Black",
        image: "/images/puma.jpg",
        description: "A versatile sneaker for everyday wear."
    },
    {
        id: 6,
        name: "Dunk Low Retro",
        brand: "Nike",
        category: "Lifestyle",
        price: 9999,
        color: "Panda",
        image: "/images/dunk.jpg",
        description: "A popular low-top sneaker with a clean design."
    }
];

// GET all sneakers
router.get('/', (req, res) => {
    res.status(200).json(sneakers);
});

module.exports = router;
