const Joi = require("joi");

const schemaTravel = Joi.object({
    id: Joi.number().integer().optional(),
    departure_city: Joi.string().required(),
    destination_city: Joi.string().required(),
    latitude_departure: Joi.number().required(),
    longitude_departure: Joi.number().required(),
    places_available: Joi.number().integer().min(1).required(),
    description: Joi.string().max(250).optional(),
    departure_timestamp: Joi.date().required(),
    activity_id: Joi.number().integer().required(),
    user_id: Joi.number().integer().required(),
    created_at: Joi.date().default(Date.now()).optional()
});

module.exports = schemaTravel;