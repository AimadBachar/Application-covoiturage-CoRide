const coreModel = require("./coreModel");
const pool = require("../db");

/**
 * @class Travel extend the coreModel
 */
class Travel extends coreModel {

    static tableName = "travel";

    constructor(obj){
        super(obj);
    };

    /**
     * This function insert in db the relation with travel and user
     * @returns {number} return id of insert association
     */
    async assocUser(){
        try{

            const sqlQuery = {
                text: `INSERT INTO "user_travel"(user_id,travel_id) VALUES ($1,$2) RETURNING id;`,
                values: [this.user_id,this.id]
            };

            const {rows} = await pool.query(sqlQuery);
            return rows ? rows[0] : new Error("internal error...");

        }catch(err){
            throw err;
        }
    };

    /**
     * This function delete relation with user and travel
     * @returns {void} return void or error
     */
    async deleteAssocUser(){
        try{
            const sqlQuery = {
                text: `DELETE FROM "user_travel" WHERE user_id = $1 AND travel_id = $2;`,
                values: [this.user_id,this.id]
            };

            const { rowCount } = await pool.query(sqlQuery);
            return rowCount ? rowCount : new Error("internal error...");

        }catch(err){
            throw err;
        }
    };
};

module.exports = Travel;