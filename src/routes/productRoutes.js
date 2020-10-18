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

router.get("/:id", productController.show);

router.put(
    "/:id",
    joiSchemaValidation.validateBody(productSchema.updateProductSchema),
    productController.update
);

router.delete("/:id", productController.delete);

router.get(
    "/",
    joiSchemaValidation.validateQueryParams(productSchema.getAllProductSchema),
    productController.index
);

module.exports = router;
