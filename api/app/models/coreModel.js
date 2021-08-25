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
    static async findAll(obj=null){

        try{
            const sqlQuery = {text:`SELECT * FROM "${this.tableName}";`};

            if(this.tableName === "travel"){
                sqlQuery.text = "SELECT * FROM travels_view;"
            }
        
            if(obj?.view && this.tableName === "user"){
                sqlQuery.text = "SELECT * FROM users_view;"
            }

            //si un objet existe dans la propriété where alors on construit la string pour la requete sql
            if(obj?.where){

                let search = ``;
                let count = 1;
                sqlQuery.values = [];
            
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

                sqlQuery.text = `SELECT * FROM "${this.tableName}" WHERE ${search};`;

                if(this.tableName === "travel"){
                    sqlQuery.text = `SELECT * FROM travels_view WHERE ${search};`;
                }

                if(obj?.view && this.tableName === "user"){
                    sqlQuery.text = `SELECT * FROM users_view WHERE ${search};`
                }
            }

            const {rows} = await pool.query(sqlQuery);

            if(rows[0]){
               return rows.map(row=>new this(row));
            }else{
               return new Error("not found"); 
            } 

        }catch(err){
            throw err.message;
        }
    };

    /**
     * This function find one object for current model in DB where id in parameter
     * @param {number} id 
     * @returns {object} return an instance of current model
     */
    static async findOne(id,obj=null){

        try{
            const sqlQuery ={
                text: `SELECT * FROM "${this.tableName}" WHERE id = $1;`,
                values:[parseInt(id,10)]
            };

            if(this.tableName === "travel"){
                sqlQuery.text = "SELECT * FROM travels_view WHERE id = $1;"
            }

            if(this.tableName === "user" && obj?.view){
                sqlQuery.text = "SELECT json_user FROM users_view WHERE (json_user->>'id')::int = $1;"
            }

            const {rows} = await pool.query(sqlQuery);
            if(rows[0]){
                return new this(rows[0]);
            }else{
                throw new Error(`id ${id} not found...`);
            } 

        }catch(err){
            throw err.message;
        }
    };

    /**
     * This function insert or update in DB for current model
     * @async
     * @returns {object} return an instance of current model
     */
    async save() {
        try{

            const sqlQuery = {};
            sqlQuery.values = [this];

            //Si un id existe dans l'instance alors on update
            if(this.id){
                sqlQuery.text = `SELECT * FROM update_${this.constructor.tableName}($1);`;
            //sinon on insert...
            }else{
                sqlQuery.text = `SELECT * FROM insert_${this.constructor.tableName}($1);`;
            }

            const {rows} = await pool.query(sqlQuery);

            if(!this.id && rows){
                this.id = rows[0].id || rows[0].insert_user;    
            }

            //on check les propriétés manquantes dans this et on les insères
            for(const row in rows[0]) {
                if(!this[row]){
                    this[row] = rows[0][row];
                }
            }
            
            return rows ? this : new Error("internal error...");

        }catch(err){
            throw err.message;
        }
    };

    /**
     * This method delete a row in current model for selected id
     * @param {number} id 
     * @returns {Boolean|Error} return true if success else Error
     */
    async delete(){
        try{

            const sqlQuery = {
                text: `DELETE FROM "${this.constructor.tableName}" WHERE id = $1;`,
                values:[parseInt(this.id,10)]
            };

            const {rowCount} = await pool.query(sqlQuery);

            return rowCount ? true : new Error("delete error...");

        }catch(err){
            throw err.message;
        }
    }


}

module.exports = coreModel;
