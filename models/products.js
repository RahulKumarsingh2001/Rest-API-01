const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide product name'],
    },
    price: {
        type: Number,
        required: [true, 'Please provide product price'],
        default: 0,
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 5,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values: ['apple', 'sumsung', 'dell', 'hp'],
            message: '{VALUE} is not supported in our company list',
        },
    }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;