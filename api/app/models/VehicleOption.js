const coreModel = require("./coreModel");

/**
 * @typedef VehicleOption 
 * @property {string} label.required the name of option
 */
class VehicleOption extends coreModel {

    static tableName = "vehicle_option";

    constructor(obj){
        super(obj);
    };

    /**
     * This function insert in db the relation with vehicle option and user
     * @returns {number} return id of insert association
     */
     async assocUser(){
        try{

            const sqlQuery = {
                text: `INSERT INTO "user_vehicle_option"(user_id,vehicle_option_id) VALUES ($1,$2) RETURNING id;`,
                values: [this.user_id,this.id]
            };

            const {rows} = await pool.query(sqlQuery);
            return rows ? rows[0] : new Error("internal error...");

        }catch(err){
            throw err;
        }
    };

    /**
     * This function delete relation with user and vehicle option
     * @returns {void} return void or error
     */
    async deleteAssocUser(){
        try{
            const sqlQuery = {
                text: `DELETE FROM "user_vehicle_option" WHERE user_id = $1 AND vehicle_option_id = $2;`,
                values: [this.user_id,this.id]
            };

            const { rowCount } = await pool.query(sqlQuery);
            return rowCount ? rowCount : new Error("internal error...");

        }catch(err){
            throw err;
        }
    };

};

module.exports = VehicleOption;