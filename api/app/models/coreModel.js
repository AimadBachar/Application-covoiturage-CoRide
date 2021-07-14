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
    };

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
