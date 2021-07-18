const coreModel = require("./coreModel");

/**
 * @typedef Vehicle 
 * @property {string} brand.required the vehicle brand
 * @property {string} model.required the vehicle model
 * @property {integer} user_id the user id
 */
class Vehicle extends coreModel {

    static tableName = "vehicle";

    constructor(obj){
        super(obj);
    };

};

module.exports = Vehicle;