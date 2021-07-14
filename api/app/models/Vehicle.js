const coreModel = require("./coreModel");

/**
 * @class Vehicle extend the coreModel
 */
class Vehicle extends coreModel {

    static tableName = "vehicle";

    constructor(obj){
        super(obj);
    };

};

module.exports = Vehicle;