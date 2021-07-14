const pool = require("../db");

/**
 * This class is the base of all models in DB
 * @class coreModel
 */
class coreModel {

    constructor(obj={}){
        for(const prop in obj){
            this[prop] = obj[prop];
        }
    }

    /**
     * This function find all object for current model in DB
     * @async
     * @returns {Array} return an array of model objects OR error
     */
    static async findAll(){

        try{
            const sqlQuery = `SELECT * FROM "${this.tableName}";`;
            const {rows} = await pool.query(sqlQuery);
            return rows ? rows.map(row=>new this(row)) : new Error("internal error");

        }catch(err){
            throw err.message;
        }
    };

    /**
     * This function find one object for current model in DB where id in parameter
     * @param {number} id 
     * @returns {object} return an instance of current model
     */
    static async findOne(id){

        try{
            const sqlQuery ={
                text: `SELECT * FROM "${this.tableName}" WHERE id = $1;`,
                values:[parseInt(id,10)]
            };

            const {rows} = await pool.query(sqlQuery);
            return rows[0] ? new this(rows[0]) : new Error(`id ${id} not found...`);

        }catch(err){
            throw err.message;
        }
    }


}

module.exports = coreModel;
