const User = require("../database/models/User");
const constants = require("../constants");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { checkObjectId } = require("../utils/dbHelper");

module.exports.createUser = async ({ email, password }) => {
    try {
        let user = await User.findOne({ email });
        if (user) {
            throw new Error(constants.userMessage.USER_EXISTS);
        }
        password = await bcrypt.hash(password, 10);

        user = await new User({ email, password });

        return await user.save();
    } catch (err) {
        console.log("Error on: Service: createUser", err);
        throw new Error(err);
    }
};

module.exports.authUser = async ({ email, password }) => {
    try {
        let user = await User.findOne({ email });
        if (!user) {
            throw new Error(constants.userMessage.USER_DOESNT_EXISTS);
        }
        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            throw new Error(constants.userMessage.INVALID_PASSWORD);
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.SECRET_KEY || "1239018301",
            { expiresIn: "1d" }
        );

        return { token };
    } catch (err) {
        console.log("Error on: Service: createUser", err);
        throw new Error(err);
    }
};
