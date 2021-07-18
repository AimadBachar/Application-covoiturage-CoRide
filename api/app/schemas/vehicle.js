const Joi = require("joi");

const schemaVehicle = Joi.object({
    id: Joi.number().integer().optional(),
    brand: Joi.string().required(),
    model: Joi.string().required()
});

module.exports = schemaVehicle;