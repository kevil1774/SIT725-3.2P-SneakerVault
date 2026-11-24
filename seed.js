
require('dotenv').config();

const mongoose = require('mongoose');
const Sneaker = require('./models/Sneaker');

const sneakers = [
    {
        id: 1,
        name: "Air Jordan 1 Retro High OG",
        brand: "Jordan",
        category: "Basketball",
        price: 16999,
        color: "Chicago Red",
        size: 9,
        stock: 12,
        supplier: "Urban Kicks",
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
        size: 10,
        stock: 8,
        supplier: "Sneaker Hub",
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
        size: 8,
        stock: 15,
        supplier: "Nike Store",
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
        size: 9,
        stock: 10,
        supplier: "NB Footwear",
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
        size: 7,
        stock: 20,
        supplier: "Puma Retail",
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
        size: 9,
        stock: 18,
        supplier: "Sneaker Hub",
        image: "/images/dunk.jpg",
        description: "A popular low-top sneaker with a clean design."
    }
];

async function seedDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        await Sneaker.deleteMany({});

        await Sneaker.insertMany(sneakers);

        console.log("Sneakers successfully added to MongoDB!");
        console.log("Total sneakers:", sneakers.length);

    } catch (error) {
        console.error("Seeding error:", error.message);

    } finally {
        await mongoose.disconnect();
    }
}

seedDatabase();
