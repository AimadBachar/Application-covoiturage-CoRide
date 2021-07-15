const Vehicle = require("../models/Vehicle");
const User = require("../models/User");

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

            const {id,userId,vehicleId} = req.params;

            const user = await User.findOne(id||userId);

            if(!user){
                return res.status(400).json("bad request");
            }

            if(vehicleId){
                const updateVehicle = await Vehicle.findOne(vehicleId);
                if(!updateVehicle || req.body.id != vehicleId ){
                    return res.status(400).json("bad request");
                }
            }
            
            const vehicle = new Vehicle(req.body);
            vehicle.user_id = user.id;

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
            const { id:userId } = req.params;

            const user = await User.findOne(userId);
            if(!user){
                return next(user);
            }

            const vehicle = await Vehicle.findOne(id);
            if(vehicle && vehicle.user_id == user.id){
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