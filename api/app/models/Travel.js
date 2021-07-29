const coreModel = require("./coreModel");
const pool = require("../db");

/**
 * @typedef Travel
 * @property {string} departure_city.required the name departure city
 * @property {string} destination_city.required the name destination city
 * @property {number} latitude_departure.required the latitude coords in float
 * @property {number} longitude_departure.required the longitude coords in float
 * @property {integer} places_available.required the number of places
 * @property {integer} remaining_places the number of places remaining
 * @property {string} description.required the travel description
 * @property {string} departure_timestamp.required the date and time departure
 * @property {integer} activity_id.required the id of activity
 * @property {string} activity the name of activity
 * @property {integer} driver_id.required the id of user
 * @property {string} driver the name of driver
 * @property {string} created_at the timestamptz created
 */
class Travel extends coreModel {

    static tableName = "travel";

    constructor(obj){
        super(obj);
    };

    /**
     * this method search traval by coords gps
     * @param {number} longitude 
     * @param {number} latitude 
     * @param {integer} rayon 
     * @param {Object} obj object contains keys and values for condition
     * @returns {array} return an array of results
     */
    static async findByCoords(longitude,latitude,rayon=10,obj=null){
        try{

            const sqlQuery = {
                text: `SELECT * FROM search_travels($1,$2,$3);`,
                values: [parseFloat(longitude),parseFloat(latitude),parseInt(rayon,10)]
            };

            if(obj?.where && Object.keys(obj.where).length>0){

                let search = ``;
                let count = 4;
            
                Object.keys(obj.where).forEach((key,index)=>{

                    if(key == "departure_timestamp"){
                        search += `date(${key}) = $${count}`;

                    }else if(isNaN(parseInt(obj.where[key],10))){
                        search += `${key} ILIKE $${count}`;
                    }else{
                      search += `${key} = $${count}`;  
                    }                   
                    sqlQuery.values.push(obj.where[key])
                    if(index < Object.keys(obj.where).length-1){
                        search += " AND ";
                        count++;
                    }
                })

                sqlQuery.text = `SELECT * FROM search_travels($1,$2,$3) WHERE ${search};`;
            }

            const {rows} = await pool.query(sqlQuery);
        
            return rows ? rows.map(row=>new this(row)) : new Error("internal error...");

        }catch(err){
            throw err;
        }
    }
};

module.exports = Travel;