const Joi = require("joi");

const schemaUser = Joi.object({
    id: Joi.number().integer().optional(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    birthdate: Joi.date().required(),
    picture: Joi.any().optional(),
    pseudo: Joi.string().optional(),
    created_at: Joi.date().optional(),
    updated_at: Joi.date().optional(),
    password: Joi.string().required()
});

module.exports = schemaUser;