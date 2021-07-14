const coreModel = require("./coreModel");

/**
 * @class Activity extend the coreModel
 */
class Activity extends coreModel {

    static tableName = "activity";

    constructor(obj){
        super(obj);
    };

};

module.exports = Activity;