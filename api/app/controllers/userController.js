const pool = require("../db");
const Activity = require("../models/Activity");
const User = require("../models/User");
const VehicleOption = require("../models/VehicleOption");

const userController = {

    /**
     * This method is an express middleware for get all rows in User model
     * @async
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns {array} an array of objects User OR an Error
     */
    async getAll(req, res, next) {

        try {
            const results = await User.findAll();
            return res.json(results);
        } catch (err) {
            next(err);
        }
    },

    /**
     * This function is a express middleware for get one row in User model
     * @async
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns {object} an object User or error 404 if id don't exist
     */
    async getOne(req, res, next) {

        try {
            const {
                id
            } = req.params;
            const result = await User.findOne(id); 
            return res.json(result);
            
        } catch (err) {
            next(err);
        }
    },

    /**
     * This method is a express middleware for insert or update one row in User model
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns {object} return an object modify or insert in db
     */
    async insertOrUpdate(req,res,next){

        try{

            const {id} = req.params;
            
            const user = new User(req.body);

            if(req.file) user.picture_link = req.file.filename; 
            
            if(user.id && parseInt(id,10) !== user.id){
                return res.status(400).json("bad request");
            }

            const result = await user.save();
            res.status(201).json(result);
            

        }catch(err){
            next(err);
        }
    },

    /**
     * This method is a express middleware for delete one row in User model
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns {null}
     */
    async delete(req,res,next){
        try{
            const {id} = req.body;
            const user = await User.findOne(id);
 
            if(user){
                await user.delete();
                res.status(204).end();
            }else{
                next(user);
            }

        }catch(err){
            next(err);
        }
    },

    async showActivities(req,res,next){
        try{

            const { id } = req.params;

            const results = await User.getActivities(id);

            return res.json(results);
            
        }catch(err){
            next(err);
        }
    },

    async showVehicleOptions(req,res,next){
        try{

            const { id } = req.params;

            const results = await User.getVehicleOption(id);

            return res.json(results);
            
        }catch(err){
            next(err);
        }
    },

    async addUserActivity(req,res,next){
        try{

            const { id } = req.params;
            const { id:activityId } = req.body;

            const user = await User.findOne(id);
            const activity = await Activity.findOne(activityId);

            if(user && activity){
                await user.addActivity(activity.id);
                res.status(201).end();
            }else{
                throw new Error("association impossible");
            }
        }catch(err){
            next(err);
        }
    },

    async deleteUserActivity(req,res,next){
        try{

            const { id } = req.params;
            const { id:activityId } = req.body;

            const user = await User.findOne(id);
            const activity = await Activity.findOne(activityId);

            if(user && activity){
                await user.deleteActivity(activity.id);
                res.status(204).end();
            }else{
                throw new Error("association impossible");
            }
        }catch(err){
            next(err);
        }
    },

    async addUserOptionVehicle(req,res,next){
        try{

            const { id } = req.params;
            const { id:vehicleOptionId } = req.body;

            const user = await User.findOne(id);
            const optionVehicle = await VehicleOption.findOne(vehicleOptionId);

            if(user && optionVehicle){
                await user.addVehicleOption(optionVehicle.id);
                res.status(201).end();
            }else{
                throw new Error("association impossible");
            }
        }catch(err){
            next(err);
        }
    },

    async deleteUserOptionVehicle(req,res,next){
        try{

            const { id } = req.params;
            const { id:vehicleOptionId } = req.body;

            const user = await User.findOne(id);
            const vehicleOption = await VehicleOption.findOne(vehicleOptionId);

            if(user && vehicleOption){
                await user.deleteVehicleOption(vehicleOption.id);
                res.status(204).end();
            }else{
                throw new Error("association impossible");
            }
        }catch(err){
            next(err);
        }
    }
}

module.exports = userController;