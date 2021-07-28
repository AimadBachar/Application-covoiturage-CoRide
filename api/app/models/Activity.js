const coreModel = require("./coreModel");
const pool = require("../db");

/**
 * @typedef Activity
 * @property {integer} id.required the id of activity
 * @property {string} label.required The name activity
 * @property {string} color The color for tag activity
 */
class Activity extends coreModel {

    static tableName = "activity";

    constructor(obj){
        super(obj);
    };

    /**
     * This function insert in db the relation with activity and user
     * @returns {number} return id of insert association
     */
    async assocUser(){
        try{

            const sqlQuery = {
                text: `INSERT INTO "user_activity"(user_id,activity_id) VALUES ($1,$2) RETURNING id;`,
                values: [this.user_id,this.id]
            };

            const {rows} = await pool.query(sqlQuery);
            return rows ? rows[0] : new Error("internal error...");

        }catch(err){
            throw err;
        }
    };

    /**
     * This function delete relation with user and activity
     * @returns {void} return void or error
     */
    async deleteAssocUser(){
        try{
            const sqlQuery = {
                text: `DELETE FROM "user_activity" WHERE user_id = $1 AND activity_id = $2;`,
                values: [this.user_id,this.id]
            };

            const { rowCount } = await pool.query(sqlQuery);
            return rowCount ? rowCount : new Error("internal error...");

        }catch(err){
            throw err;
        }
    };

};

module.exports = Activity;