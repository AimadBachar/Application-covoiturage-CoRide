const coreModel = require("./coreModel");

/**
 * @class Vehicle option extend the coreModel
 */
class VehicleOption extends coreModel {

    static tableName = "vehicle_option";

    constructor(obj){
        super(obj);
    };

};

module.exports = VehicleOption;