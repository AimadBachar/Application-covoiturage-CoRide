const coreModel = require("./coreModel");

class User extends coreModel {

    static tableName = "user";

    constructor(obj){
        super(obj);
    };

};

module.exports = User;