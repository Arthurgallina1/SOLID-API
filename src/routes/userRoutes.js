const express = require("express");
const UserController = require("../controllers/userController");
const signupSchema = require("../apiSchema/userSchema");
const joiSchemaValidation = require("../middlewares/joiSchemaValidation");
const router = express.Router();

router.post(
    "/signup",
    joiSchemaValidation.validateBody(signupSchema.signupSchema),
    UserController.signup
);

router.post(
    "/login",
    joiSchemaValidation.validateBody(signupSchema.loginSchema),
    UserController.login
);

module.exports = router;
