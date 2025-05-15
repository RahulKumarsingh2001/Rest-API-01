require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const connectDB = require('./db/connect');  

const products_routes = require('./routes/products')

app.get('/', (req,res) => {
    res.send('Hello World');
});

// middleware for parsing json data
app.use(express.json());

// middleware for set routers
app.use('/api/products', products_routes);



const start = async() => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
};

start()