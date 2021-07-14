const pool = require("../db");

class coreModel {

    constructor(obj={}){
        for(const prop in obj){
            this[prop] = obj[prop];
        }
    }

    static async findAll(){

        try{

            const sqlQuery = `SELECT * FROM "${this.tableName}";`;

            const {rows} = await pool.query(sqlQuery);
    
            return rows ? rows.map(row=>new this(row)) : new Error("internal error");

        }catch(err){
            throw err.message;
        }

    }


}

module.exports = coreModel;
