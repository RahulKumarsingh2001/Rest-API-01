require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/products");
const productJSON = require('./products.json');

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await Product.deleteMany(); // Delete all existing products
        await Product.create(productJSON);
        console.log("data will be added Successfully!");
    } catch (error) {
        console.log(error);
        
    }
}

start();