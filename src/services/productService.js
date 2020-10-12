const Product = require("../database/models/Product");

module.exports.createProduct = async (serviceData) => {
    try {
        let product = new Product({
            ...serviceData,
        });

        return await product.save();
    } catch (err) {
        console.log("Error on: Service: createProduct", error);
        throw new Error(err);
    }
};
