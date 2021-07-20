const Activity = require("../models/Activity");
const Travel = require("../models/Travel");
const User = require("../models/User");
const VehicleOption = require("../models/VehicleOption");
const jwt = require("jsonwebtoken");

const userController = {

    async login(req,res,next){

        try{
        const {user,password} = req.body;

        if(!user || !password){
            return res.status(400).json("Error Please enter the correct username and password");
        }

        const login = await User.findAll({where:{
            user: user,
            password: password
        }});

        if(login){
            const token = jwt.sign({
                username: login.email, 
                id: login.id }, 
                process.env.TOKEN_SECRET,
                {expiresIn: "24 hours"}
                );
            res.json({token});
        } else{
            res.status(401).json("Error username or password");
        } 
        
        }catch(err){
            next(err);
        }

    },

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

            if(req.file) user.picture_link = req.file.location; 
            
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

    /**
     * This express middleware returns an array of actvities for one user
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns {JSON} an json array or error
     */
    async showActivities(req,res,next){
        try{

            const { id } = req.params;

            const results = await User.getActivities(id);

            return res.json(results);
            
        }catch(err){
            next(err);
        }
    },

    /**
     * this express middleware returns an array of vehicle options for one user
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns {JSON} return a json array or error
     */
    async showVehicleOptions(req,res,next){
        try{

            const { id } = req.params;

            const results = await User.getVehicleOption(id);

            return res.json(results);
            
        }catch(err){
            next(err);
        }
    },

    /**
     * this express middleware add one activity for one user
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns {void} return void or error
     */
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

    /**
     * this express middleware delete one activity for one user
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns {void} return voir or error
     */
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

    /**
     * this express middleware add one vehicle option for one user
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns {void} return void or error
     */
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

    /**
     * this express middleware delete one vehicle option for one user
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns {void} return void or error
     */
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
    },

    /**
     * this express middleware add one user on one travel
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns {void} return void or error
     */
    async addUserTravel(req,res,next){
        try{

            const { id } = req.params;
            const { id:travelId } = req.body;

            const user = await User.findOne(id);
            const travel = await Travel.findOne(travelId);

            if(user && travel){
                await user.addTravel(travel.id);
                res.status(201).end();
            }else{
                throw new Error("association impossible");
            }
        }catch(err){
            next(err);
        }
    },

    /**
     * this express middleware delete a user on travel
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     */
    async deleteUserTravel(req,res,next){
        try{

            const { id } = req.params;
            const { id:travelId } = req.body;

            const user = await User.findOne(id);
            const travel = await Travel.findOne(travelId);

            if(user && travel){
                await user.deleteTravel(travel.id);
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