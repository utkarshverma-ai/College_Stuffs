const products = require("../modules/productModules");

exports.getProducts = (req, res) => {
    res.json(products);
};

exports.addProducts = (req, res) => {
    const product = req.body;
    console.log("product", product);
    res.json({
        message: "Product added successfully",
        product,
    });
};
    