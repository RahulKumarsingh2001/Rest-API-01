const mongoose = require("mongoose");



const connectDB = (url) => {
    console.log("Connecting to MongoDB...");
    
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

module.exports = connectDB;