const Product = require('../models/products');

const getAllProducts = async (req,res) => {
    const {company, name, featured, sort, select} = req.query;
    const queryObject = {};

    if(company) {
        queryObject.company = company;   
    }
    if(name) {
        queryObject.name = {$regex: name, $options: "i"};
    }
    if(featured) {
        queryObject.featured = featured;
    }


    let apiData = Product.find(queryObject);
    // console.log(apiData);
    

    if(sort) {
        // const shortFix = sort.replace(",", " ");
        const shortFix = sort.split(",").join(" ");
        // queryObject.sort = shortFix;
        apiData = apiData.sort(shortFix);
    }

    if(select) {
        const selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }


    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;
    let skip = (page - 1) * limit;              // formula for pagination

    apiData = apiData.skip(skip).limit(limit);  

    console.log(queryObject);;
    

    const Products = await apiData;
    res.status(200).json({Products, nbHits: Products.length});
};

const getAllProductsTesting = async (req,res) => {
    const myData = await Product.find(req.query).select("name company ");
    console.log(req.query);
    
    res.status(200).json({myData});
};

module.exports = {getAllProducts, getAllProductsTesting};