const coreModel = require("./coreModel");

/**
 * @class User extend the coreModel
 */
class User extends coreModel {

    static tableName = "user";

    constructor(obj){
        super(obj);
    };

};

module.exports = User;