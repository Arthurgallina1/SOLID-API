module.exports = {
    defaultServerResponse: {
        status: 400,
        message: "",
        body: {},
    },
    productMessage: {
        PRODUCT_CREATED: "Product created successfully!",
        PRODUCT_GET: "Product Fetched successfully",
        PRODUCT_NOT_FOUND: "Product not found",
        PRODUCT_UPDATED: "Product updated sucessfully",
        PRODUCT_DELETED: "Product deleted sucessfully",
    },
    userMessage: {
        USER_EXISTS: "EMail already exists",
        SIGNEUP_SUCCESS: "Signup Success",
        USER_DOESNT_EXISTS: "User doesn't exists.",
        INVALID_PASSWORD: "The password is incorrect.",
    },
    requestValidationMessage: {
        BAD_REQUEST: "Invalid fields",
        TOKEN_MISSING: "Permission denied",
    },
    databaseMessage: {
        INVALID_ID: "Invalid ID",
    },
};
