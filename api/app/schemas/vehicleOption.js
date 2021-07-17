const Joi = require("joi");

const schemaVehicleOption = Joi.object({
    id: Joi.number().integer().optional(),
    label: Joi.string().required()
});

module.exports = schemaVehicleOption;