const Product = require("../database/models/Product");
const constants = require("../constants");
const mongoose = require("mongoose");
const { checkObjectId } = require("../utils/dbHelper");

module.exports.createProduct = async (serviceData) => {
    try {
        let product = new Product({
            ...serviceData,
        });

        return await product.save();
    } catch (err) {
        console.log("Error on: Service: createProduct", err);
        throw new Error(err);
    }
};

module.exports.getAllProducts = async ({ skip = 0, limit = 4 }) => {
    try {
        let products = await Product.find({})
            .skip(parseInt(skip))
            .limit(parseInt(limit));
        return products;
    } catch (err) {
        console.log("Error on: Service: getAllProduct", err);
        throw new Error(err);
    }
};

module.exports.getProductById = async ({ id }) => {
    try {
        checkObjectId(id);
        let product = await Product.findById(id);
        if (!product) {
            throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
        }
        return product;
    } catch (err) {
        console.log("Error on: Service: getProductById", err);
        throw new Error(err);
    }
};

module.exports.updateProduct = async ({ id, updateInfo }) => {
    try {
        checkObjectId(id);
        let product = await Product.findOneAndUpdate({ _id: id }, updateInfo, {
            new: true,
        });
        if (!product) {
            throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
        }
        return product;
    } catch (err) {
        console.log("Error on: Service: updateProduct", err);
        throw new Error(err);
    }
};

module.exports.deleteProductById = async ({ _id }) => {
    try {
        checkObjectId(_id);
        let product = await Product.findByIdAndDelete(_id);
        console.log(product);
        if (!product) {
            throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
        }
        return product;
    } catch (err) {
        console.log("Error on: Service: updateProduct", err);
        throw new Error(err);
    }
};
