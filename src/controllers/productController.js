const { response } = require("express");
const productService = require("../services/productService");
const constants = require("../constants");

module.exports = {
    async store(req, res) {
        let response = { ...constants.defaultServerResponse };
        try {
            const resFromService = await productService.createProduct(req.body);
            response.status = 201;
            response.message = constants.productMessage.PRODUCT_CREATED;
            response.body = resFromService;
        } catch (error) {
            response.message = error.message;
            console.log("Error on Product Controller", error);
        }
        return res.json(response);
    },

    async index(req, res) {
        let response = { ...constants.defaultServerResponse };
        try {
            const resFromService = await productService.getAllProducts(
                req.query
            );
            response.status = 201;
            response.message = constants.productMessage.PRODUCT_GET;
            response.body = resFromService;
        } catch (error) {
            response.message = error.message;
            console.log("Error on Product Controller", error);
        }
        return res.json(response);
    },

    async show(req, res) {
        let response = { ...constants.defaultServerResponse };
        try {
            const resFromService = await productService.getProductById(
                req.params
            );
            response.status = 201;
            response.message = constants.productMessage.PRODUCT_GET;
            response.body = resFromService;
        } catch (error) {
            response.message = error.message;
            console.log("Error on Product Controller: ", error);
        }
        return res.json(response);
    },

    async update(req, res) {
        let response = { ...constants.defaultServerResponse };
        try {
            const resFromService = await productService.updateProduct({
                id: req.params.id,
                updateInfo: req.body,
            });
            response.status = 201;
            response.message = constants.productMessage.PRODUCT_GET;
            response.body = resFromService;
        } catch (error) {
            response.message = error.message;
            console.log("Error on Product Controller: ", error);
        }
        return res.json(response);
    },

    async delete(req, res) {
        let response = { ...constants.defaultServerResponse };
        try {
            const resFromService = await productService.deleteProductById({
                _id: req.params.id,
            });
            response.status = 200;
            response.message = constants.productMessage.PRODUCT_DELETED;
            response.body = resFromService;
        } catch (error) {
            response.message = error.message;
            console.log("Error on Product Controller: ", error);
        }
        return res.json(response);
    },
};
