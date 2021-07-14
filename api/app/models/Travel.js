const coreModel = require("./coreModel");

/**
 * @class Travel extend the coreModel
 */
class Travel extends coreModel {

    static tableName = "travel";

    constructor(obj){
        super(obj);
    };

};

module.exports = Travel;