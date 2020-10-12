const Joi = require("@hapi/joi");

module.exports.createProductSchema = Joi.object().keys({
    name: Joi.string().required(),
    brand: Joi.string().required(),
    price: Joi.number().required(),
});
