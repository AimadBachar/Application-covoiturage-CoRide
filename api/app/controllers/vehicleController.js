const Vehicle = require("../models/Vehicle");

const vehicleController = {

    /**
     * This method is an express middleware for get all rows in Vehicle model
     * @async
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns {array} an array of objects Vehicle Option OR an Error
     */
    async getAll(req, res, next) {

        try {
            const {id} = req.params;
            const results = await Vehicle.findAll({where:{user_id:id}});
            return res.json(results);
        } catch (err) {
            next(err);
        }
    },

    /**
     * This function is a express middleware for get one row in Vehicle model
     * @async
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns {object} an object Vehicle or error 404 if id don't exist
     */
    async getOne(req, res, next) {

        try {
            const {
                id
            } = req.params;
            const result = await Vehicle.findOne(id); 
            return res.json(result);
            
        } catch (err) {
            next(err);
        }
    },

    /**
     * This method is a express middleware for insert or update one row in Vehicle model
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns {object} return an object modify or insert in db
     */
    async insertOrUpdate(req,res,next){

        try{

            const {id} = req.params;
            
            const vehicle = new Vehicle(req.body);
            
            if(vehicle.id && parseInt(id,10) !== vehicle.id){
                return res.status(401).json("bad request");
            }

            const result = await vehicle.save();
            res.status(201).json(result);
            

        }catch(err){
            next(err);
        }
    },

    /**
     * This method is a express middleware for delete one row in Vehicle model
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns {null}
     */
    async delete(req,res,next){
        try{
            const {id} = req.body;
            const vehicle = await Vehicle.findOne(id);
            if(vehicle){
                await vehicle.delete();
                res.status(204).end();
            }else{
                next(vehicle);
            }

        }catch(err){
            next(err);
        }
    }
}

module.exports = vehicleController;