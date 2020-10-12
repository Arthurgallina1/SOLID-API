const express = require("express");
const productController = require("../controllers/productController");
const joiSchemaValidation = require("../middlewares/joiSchemaValidation");
const productSchema = require("../apiSchema/productSchema");

const router = express.Router();

router.post(
    "/",
    joiSchemaValidation.validateBody(productSchema.createProductSchema),
    productController.store
);

module.exports = router;
