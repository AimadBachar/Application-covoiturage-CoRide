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

    async findByCoords(longitude,latitude,rayon){
        try{

            const sqlQuery = {
                text: `SELECT * FROM search_travels($1,$2,$3);`,
                values: [parseFloat(longitude),parseFloat(latitude),parseInt(rayon,10)]
            };

            const {rows} = await pool.query(sqlQuery);

            return rows ? rows.map(row=>new this(row)) : new Error("internal error...");

        }catch(err){
            throw err;
        }
    }
};

module.exports = Travel;