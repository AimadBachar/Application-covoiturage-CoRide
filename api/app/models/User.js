const coreModel = require("./coreModel");
const pool = require("../db");

/**
 * @class User extend the coreModel
 */
class User extends coreModel {

    static tableName = "user";

    constructor(obj){
        super(obj);
    };

    static async getActivities(id){
        try{

            const sqlQuery = {
                text:`SELECT a.* FROM activity AS a
                      INNER JOIN user_activity AS ua
                      ON a.id = ua.activity_id
                      INNER JOIN "user" AS u
                      ON u.id = ua.user_id
                      WHERE u.id = $1;`,
                values:[parseInt(id,10)]
            };

            const {rows} = await pool.query(sqlQuery);

            return rows ? rows.map(row=>new this(row)) : new Error("internal error");

        }catch(err){
            throw err;
        }
    };

    static async getVehicleOption(id){
        try{

            const sqlQuery = {
                text:`SELECT v.* FROM vehicle_option AS v
                      INNER JOIN user_vehicle_option AS uvo
                      ON v.id = uvo.vehicle_option_id
                      INNER JOIN "user" AS u
                      ON u.id = uvo.user_id
                      WHERE u.id = $1;`,
                values:[parseInt(id,10)]
            };

            const {rows} = await pool.query(sqlQuery);

            return rows ? rows.map(row=>new this(row)) : new Error("internal error");

        }catch(err){
            throw err;
        }
    };

    async addActivity(activityId){
        try{

            const sqlQuery = {
                text: `INSERT INTO user_activity(user_id,activity_id) 
                       SELECT $1,$2
                       FROM VALUES,user_activity AS ua
                       WHERE ua.id NOT IN (
                          SELECT id FROM user_activity WHERE user_id = $1 AND activity_id = $2 
                       )
                       RETURNING id;`,
                values:[this.id,activityId]
            }

            const {rows} = await pool.query(sqlQuery);

            return rows ? rows[0] : new Error("internal error...");

        }catch(err){
            throw err;
        }
    }

};

module.exports = User;