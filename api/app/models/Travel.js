const coreModel = require("./coreModel");
const pool = require("../db");

/**
 * @typedef Travel
 * @property {string} departure_city.required the name departure city
 * @property {string} destination_city.required the name destination city
 * @property {number} latitude_departure.required the latitude coords in float
 * @property {number} longitude_departure.required the longitude coords in float
 * @property {integer} places_available.required the number of places
 * @property {string} description.required the travel description
 * @property {string} departure_timestamp.required the date and time departure
 * @property {integer} activity_id.required the id of activity
 * @property {integer} user_id.required the id of user
 * @property {string} created_at the timestamptz created
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