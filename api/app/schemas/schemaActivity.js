const Joi = require("joi");

const schemaActivity = Joi.object({
    id: Joi.number().integer().optional(),
    label: Joi.string().required(),
    color: Joi.string().hex().required()
});

module.exports = schemaActivity;