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
};
